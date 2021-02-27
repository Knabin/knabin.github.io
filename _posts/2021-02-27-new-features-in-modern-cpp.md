---
title: 1-1. 모던 C++의 새로운 기능 익히기
author: 구름
date: 2021-02-27 21:46:00 +0900
categories: [C++, 모던 C++로 배우는 함수형 프로그래밍]
tags: [C++]
---

## Auto 키워드로 데이터 타입을 자동으로 정의하기
- 자동  지속 기간(Automatic Storage Duration): 변수가 해당 변수를 정의한 시점에서 생성되고, 코드 블록을 빠져나가면 파괴되는 것
- C++11부터는 auto 키워드가 초기화에 선언된 변수의 실제 타입을 추론하기 위해 사용된다.
- C++14부터는 auto 키워드를 함수에 적용해 후행 반환 타입(Trailing Return Type)을 사용할 수 있다.

```cpp
auto a = 1;
auto b = 1.0;
auto c = a + b;
auto d = { b, c };

std::cout << typeid(a).name() << std::endl;	// i
std::cout << typeid(b).name() << std::endl;	// d
std::cout << typeid(c).name() << std::endl;	// d
std::cout << typeid(d).name() << std::endl;	// St16initializer_listIdE
```

- 함수의 반환 타입에 사용할 수도 있다.

```cpp
auto foo(int a, int b)
{
	return a + b;
}
```

- 함수에는 후행 반환 타입을 지정할 수 있다. (사용 이유는 <a href="#decltype-키워드로-표현식-타입-정의하기">decltype 키워드로 표현식 타입 정의하기</a> 참조)

```cpp
auto foo(int a, int b) -> int
{
    return a + b;
}
```

<br>

---

## decltype 키워드로 표현식 타입 정의하기
- decltype - 객체나 표현식의 타입을 알고 싶을 때 사용하는 키워드

```cpp
const int func1();
const int func2();
int i;

struct X { double d };
const X* x = new X();
```

```cpp
// func1() 타입을 사용해서 const int 변수를 선언한다.
decltype(func1()) f1;

// func2() 타입을 사용해서 const int& 변수를 선언한다.
decltype(func2()) f2;

// i 타입을 사용해서 int 변수를 선언한다.
decltype(i) i1;

// struct X 타입을 사용해서 double 변수를 선언한다.
decltype(x->d) d1;	// double type
decltype((x->d)) d2;	// const double& type
```

```cpp
template<typename I, typename J, typename K>
K add(I i, J j)
{
	return i + j;
}
```

```cpp
template<typename I, typename J>
auto add(I i, J j) -> decltype(i + j)
{
	return i + j;
}
```

<br>

---

## null 포인터
- null 포인터를 가리키기 위해 사용했던 NULL 매크로를 대체하는 nullptr을 지원한다.
- 이를 통해 0을 지칭하는지, 아니면 null 포인터를 지칭하는지 모호했던 경우를 피할 수 있다.

```cpp
void funct(const char *);
void funct(int);

funct(NULL);	// const char *로 동작하길 기대했으나, int 버전 함수가 호출된다.
funct(nullptr);	// const char * 버전 함수가 호출된다.
```

<br>

---

## 비멤버 함수 begin()과 end()
```cpp
int arr[] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

for (auto i = std::begin(arr); i != std::end(arr); ++i)
{
    // 작업
}
```

<br>

---

## 범위 기반 for 루프로 컬렉션 내 요소 순회
- 컬렉션 안의 요소 개수를 신경 쓰지 않고 각 요소에 어떤 작업을 해야 하거나, 배열 인덱스 범위의 초과 여부를 걱정하지 않고 각 요소에 접근하고 싶을 때 사용한다.

```cpp
for (auto a : arr)
{
	// a에 필요한 작업을 처리한다.
}
```