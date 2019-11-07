#include "BasicMetricImplementation.h"

limitWithCoef BasicMetricImplementation::retrieveNearestLimit(std::vector<limitWithCoef>& limits, float value)
{
	if (value <= limits[0].limit) return limits[0];
	for (size_t i = 0; i < limits.size(); ++i) {
		if (value > limits[i].limit &&
			value <= limits[i + 1].limit) {
			return limits[i + 1];
		}
	}

	return limits[0];
}

BasicMetricImplementation::BasicMetricImplementation(std::vector<MetricWithCoef*>& children)
{
	_children = children;
}


BasicMetricImplementation::~BasicMetricImplementation()
{
}

float BasicMetricImplementation::doCalculation()
{
	float* array = new float[_children.size()];

	for (size_t i = 0; i < _children.size(); ++i) {
		array[i] = _children[i]->doCalculation();
		limitWithCoef lim = retrieveNearestLimit(_children[i]->limits,
			array[i] / _children[i]->expectedMaxResult);
		array[i] *= lim.coef;
	}

	float sum = std::accumulate(array, &array[_children.size()], 0);

	delete[] array;

	return sum / _children.size();
}
