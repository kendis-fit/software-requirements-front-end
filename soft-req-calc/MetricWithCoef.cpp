#include "MetricWithCoef.h"


MetricWithCoef::MetricWithCoef(AbstractMetric * m, const float c,
							   const float expectedMax,  std::vector<limitWithCoef>& lims)
								: metric(m), coef(c), expectedMaxResult(expectedMax)
{
	std::sort(lims.begin(), lims.end(), [](limitWithCoef& a, limitWithCoef& b) {
		return a.limit < b.limit;
	});
	limits = lims;
};

float MetricWithCoef::doCalculation()
{
	return metric->doCalculation() * coef;
}


MetricWithCoef::~MetricWithCoef()
{
}
