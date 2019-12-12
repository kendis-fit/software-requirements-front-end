#include "AbstractMetric.h"


AbstractMetric::AbstractMetric() : _children(8)
{
}

AbstractMetric::~AbstractMetric()
{
	// _children get destroyed
}

MetricWithCoef* AbstractMetric::getChild(int index)
{
	return _children.at(index);
}
