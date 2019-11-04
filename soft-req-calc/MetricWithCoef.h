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

    MetricWithCoef(const MetricWithCoef& a) :
        metric(a.metric),
        coef(a.coef),
        expectedMaxResult(a.expectedMaxResult),
        limits(a.limits) {}

    MetricWithCoef& operator=(const MetricWithCoef& a)
    {
        metric = a.metric;
        coef = a.coef;
        expectedMaxResult = a.expectedMaxResult;
        limits = a.limits;

        return *this;
    }

	MetricWithCoef() = delete;

	virtual float doCalculation() override;

	virtual ~MetricWithCoef();
};

