#pragma once
#include <vector>
#include <algorithm>

#include "AbstractMetric.h"
#include "MetricWithCoef.h"
#include "limitWithCoef.h"

class BasicMetricImplementation : public AbstractMetric
{
private:
	limitWithCoef retrieveNearestLimit(std::vector<limitWithCoef>&, float value);
public:
	BasicMetricImplementation(std::vector<MetricWithCoef*>& children);
	virtual ~BasicMetricImplementation();

	// Inherited via AbstractMetric
	virtual float doCalculation() override;
};

