#pragma once
#include <vector>
#include <algorithm>

#include "rapidjson/document.h"

#include "AbstractMetric.h"
#include "MetricWithCoef.h"
#include "limitWithCoef.h"

class BasicMetricImplementation : public AbstractMetric
{
private:
	limitWithCoef retrieveNearestLimit(std::vector<limitWithCoef>&, float value);
public:
	BasicMetricImplementation(std::vector<MetricWithCoef*>& children);
	BasicMetricImplementation() = default;
	virtual ~BasicMetricImplementation();

	// Inherited via AbstractMetric
	virtual float doCalculation() override;
	void initFromJson(const rapidjson::Document& doc, const char* name);
};

