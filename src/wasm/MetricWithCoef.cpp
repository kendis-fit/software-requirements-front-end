#include "MetricWithCoef.h"
#include "rapidjson/document.h"

MetricWithCoef::MetricWithCoef(AbstractMetric* m, const float c,
							   const float expectedMax,  std::vector<limitWithCoef>& lims)
								: metric(m), coef(c), expectedMaxResult(expectedMax)
{
	std::sort(lims.begin(), lims.end(), [](limitWithCoef& a, limitWithCoef& b) {
		return a.limit < b.limit;
	});
	limits = lims;
}

float MetricWithCoef::doCalculation()
{
    if(metric) {
        return metric->doCalculation() * coef;
    }
    return this->coef;
}


MetricWithCoef::~MetricWithCoef()
{

}

MetricWithCoef::MetricWithCoef(const MetricWithCoef& a) :
        metric(a.metric),
        coef(a.coef),
        expectedMaxResult(a.expectedMaxResult),
        limits(a.limits) {}

MetricWithCoef& MetricWithCoef::operator=(const MetricWithCoef& a)
{
        metric = a.metric;
        coef = a.coef;
        expectedMaxResult = a.expectedMaxResult;
        limits = a.limits;

        return *this;
}


void MetricWithCoef::initFromJson(const rapidjson::Document& doc)
{
}
