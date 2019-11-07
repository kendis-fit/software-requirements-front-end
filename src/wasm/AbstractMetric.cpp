#include "AbstractMetric.h"


AbstractMetric::AbstractMetric()
{

}

AbstractMetric::~AbstractMetric()
{
	// _children get destroyed
}

MetricWithCoef* AbstractMetric::getChild(int index)
{
	return _children[index];
}
