#include <fstream>
#include <iostream>
#include <sstream>
#include "rapidjson/rapidjson.h"


void loadFileInto(std::string& target, const char* filename)
{
    std::ifstream t(filename);
    std::stringstream buffer;
    buffer << t.rdbuf();
    target = buffer.str();
}

int main(int argc, char** argv)
{
    std::string file;
    loadFileInto(file, "test.json");

    std::cout << file;

    std::cin.get();
	return 0;
}
