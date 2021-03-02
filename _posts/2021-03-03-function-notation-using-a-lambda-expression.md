---
title: 1-3. 람다 표현식
author: 구름
date: 2021-03-03 00:06:00 +0900
categories: [C++, 모던 C++로 배우는 함수형 프로그래밍]
tags: [C++]
---

## 간단한 함수를 람다로 표현하기
- 람다 표현식: 함수의 익명 표기법. 함수형 프로그래밍에서 일급 함수(first class function)와 순수 함수(pure function)를 만들 때 유용하다.
- **[...] (...) {...}**
	- [] - 캡처 목록(capturing list)
	    -   람다 표현식 바깥의 변수를 람다 본문에서 어떻게 접근하는지를 나타낸다.
	    -   람다 표현식의 시작을 나타낸다.
	    -   캡처 목록에 &를 사용하면 바깥 범위에 있는 변수를 참조로 캡처하고, =를 쓰면 값으로 캡처한다.
	-   () - 매개변수 목록(parameter list)
	-   {} - 본문
```cpp
for_each(
	begin(vehicles),
	end(vehicles),
	[](const Vehicle &vehicle)
    {
        cout << vehicle.GetType() << endl;
    });
```

<br>

---

## 여러 줄의 함수를 람다로 표현하기
```cpp
// 벡터 vect 선언 후 0~9 숫자 push_back

for_each(
    begin(vect),
    end(vect),
    [](int n)
    {
        cout << n << " is";
        if (n < 2)
        {
            if (n == 0) cout << " not";
        }
        else
        {
            for (int j = 2; j < b; ++j)
            {
                if (n % j == 0)
                {
                    cout << " not";
                    break;
                }
            }
        }
        
        cout << " prime number" << endl;
    });
```

<br>

---

## 람다 표현식에서 값 캡처하기
```cpp
int a = 2;
int b = 8;

for_each(
	begin(vect),
    end(vect),
    // 명시적으로 해당 변수만 값으로 캡처한다.
    [a,b](int n)
    {
        if (n >= a && n <= b)
            cout << n << " ";
    });

a = 3;
b = 7;

for_each(
    begin(vect),
    end(vect),
    // 암시적으로 모든 변수를 값으로 캡처한다.
    [=](int n)
    {
        if (n >= a && n <= b)
            cout << n << " ";
    });
```

```cpp
for_each(
    begin(vect),
    end(vect),
    // 두 변수를 캡처하지만, mutable 키워드 때문에 실제로 수정되지 않는다.
    [=](int& x) mutable
    {
        const int old = x;
        x *= 2;
        a = b;
        b = old;
    });
```

-   mutable 키워드를 사용했기 때문에 최종 결과값은 변경 없이 그대로 남게 된다.
-   만약 이 예제에서 a와 b의 값을 수정하고 싶다면 참조를 캡처해야 한다.

```cpp
for_each(
    begin(vect),
    end(vect),
    [&a, &b](int& x)
    {
        const int old = x;
        x *= 2;
        a = b;
        b = old;
    });
```

<br>

---

## 초기화 캡처
- 초기화 캡처(Initialization Capture): 변수의 값을 캡처해서 람다 표현식의 변수에 할당할 수 있다. C++14에 추가됐다.
```cpp
int a = 5;

// a를 사용해서 람다에서 사용하는 변수 x를 초기화한다.
auto myLambda = [&x = a]() { x += 2; };

myLambda();

// 출력값 == 7
cout << a << endl;
```

<br>

---

## 제너릭 람다 표현식
-   C++14부터 매개변수 목록에도 auto 사용이 가능하다.
```cpp
auto findMax = [](auto &x, auto &y)
{
    return x > y ? x : y;
};

int inta = 5, intb = 3;
float floa = 2.5f, f2 = 2.05f;

cout << findMax(inta, intb) << endl;
cout << findMax(floa, flob) << endl;
```