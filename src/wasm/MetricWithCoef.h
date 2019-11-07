#pragma once
#include <algorithm>

#include "ICalculation.h"
#include "AbstractMetric.h"
#include "limitWithCoef.h"

class MetricWithCoef : public ICalculation
{
public:
	AbstractMetric* metric;
	float coef;
	float expectedMaxResult;
	std::vector<limitWithCoef> limits;

	MetricWithCoef(AbstractMetric* m, const float c,
		           const float expectedMax,  std::vector<limitWithCoef>& lims);

    MetricWithCoef(const MetricWithCoef& a);

    MetricWithCoef(MetricWithCoef&& a) = default;

    MetricWithCoef& operator=(const MetricWithCoef& a);

	MetricWithCoef() = delete;

	virtual float doCalculation() override;

	virtual ~MetricWithCoef();
};

