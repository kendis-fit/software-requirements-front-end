#pragma once

#include <vector>
#include "ICalculation.h"

class MetricWithCoef;

class AbstractMetric : public ICalculation
{
protected:
	std::vector<MetricWithCoef*> _children;
public:
	AbstractMetric();
	virtual ~AbstractMetric();
	virtual float doCalculation() override = 0;
	virtual MetricWithCoef* getChild(int index);
};

