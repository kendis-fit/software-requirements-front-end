#pragma once
struct limitWithCoef
{
	float limit;
	float coef;

	limitWithCoef(float l, float c) : limit(l), coef(c) {}
    limitWithCoef(float c): limit(1.0f), coef(c) {}
};

