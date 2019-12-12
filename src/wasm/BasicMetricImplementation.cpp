#include <memory>
#include "rapidjson/document.h"
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
	std::unique_ptr<float> array = std::make_unique<float>(_children.size());

	for (size_t i = 0; i < _children.size(); ++i) {
		array.get()[i] = _children[i]->doCalculation();
		limitWithCoef lim = retrieveNearestLimit(_children[i]->limits,
                            array.get()[i] / _children[i]->expectedMaxResult);
		array.get()[i] *= lim.coef;
	}

	float sum = std::accumulate(array.get(), array.get() + _children.size(), 0);

	return sum / _children.size();
}

void BasicMetricImplementation::initFromJson(const rapidjson::Document& doc, const char* name)
{

}
