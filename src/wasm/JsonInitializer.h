#ifndef JSONINITIALIZER_H
#define JSONINITIALIZER_H

#include <string>
#include <memory>

#include "BasicMetricImplementation.h"

namespace JsonInitializer
{

   std::unique_ptr<BasicMetricImplementation> initTree(const char* json);

}

#endif // JSONINITIALIZER_H
