#include <iostream>
#include <math.h>

using namespace std;

int main()
{
    int n;
    cin >> n;
    string output[n];
    
    for (int i = 0; i < n; i++)
    {
        float u, v, d, r;
        cin >> u >> v >> d >> r;
        float t = (d - r / sin(45)) / (sin(45) * v);
        float x = (v * t + r) * cos(45);
        if (x >= u * t)
        {
            output[i] = "SHOOT";
        }
        else
        {
            output[i] = "DON'T";
        }
    }
    
    for (int j = 0; j < n; j++)
    {
        cout << output[j] << endl;
    }
    
    return 0;
}