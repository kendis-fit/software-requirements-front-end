#include <string>
#include <memory>

#include "JsonInitializer.h"
#include "rapidjson/rapidjson.h"
#include "rapidjson/document.h"


std::unique_ptr<BasicMetricImplementation> JsonInitializer::initTree(const char* json)
{
    std::unique_ptr<BasicMetricImplementation> metric
                           = std::make_unique<BasicMetricImplementation>();

    rapidjson::Document doc;

    doc.Parse(json);

    metric->initFromJson(doc, "");

    return std::move(metric);
}
