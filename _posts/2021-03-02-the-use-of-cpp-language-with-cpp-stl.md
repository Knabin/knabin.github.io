---
title: 1-2. C++ 표준 라이브러리 구현 살펴보기
author: 구름
date: 2021-03-02 20:35:00 +0900
categories: [C++, 모던 C++로 배우는 함수형 프로그래밍]
tags: [C++]
---

## 컨테이너 안에 객체 배치하기
- 컨테이너: 다른 객체를 저장하고, 이 객체가 사용하는 메모리를 관리한다.
- std::array - 동일한 데이터 타입의 객체를 저장하고 선형으로 배치하는 순차 컨테이너

```cpp
// 10개의 정수로 array를 초기화한다.
std::array<int, 10> arr = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

// array의 각 요소를 출력한다.
for (auto a : arr) std::cout << a << " ";

// array의 첫 번째와 세 번째 요소에 새로운 값을 설정한다.
arr[1] = 9;
arr[3] = 7;
```

- std::array와 보통의 배열 간 성능 이슈는 없으나, std::array는 함수에 값으로 전달하거나 함수에서 값으로 반환이 가능하다.
- 또한 배열 크기를 쉽게 알 수 있고, 반복자를 기반으로 하는 STL 알고리즘을 활용하기 좋다.
- std::array는 나중에 크기를 변경할 수 없으므로 <u>배열을 생성할 때 확정</u>해야 한다. **(삽입/삭제 불가능)**
- 이에 대한 해결책으로 **std::vector**를 사용한다.

```cpp
// 3개의 정수로 vector를 초기화한다.
std::vector<int> vect = { 0, 1, 2 };

// vector의 각 요소를 출력한다.
for (auto v : vect) std::cout << v << " ";
std::cout << std::endl;

// 2개의 데이터를 추가한다.
vect.push_back(3);
vect.push_back(4);

// 수정된 vector의 각 요소를 출력한다.
for (auto v : vect) std::cout << v << " ";
std::cout << std::endl;

// vector의 두 번째와 네 번째 요소에 새로운 값을 설정한다.
vect.at(2) = 5;
vect.at(4) = 6;
```

- [] 연산자 대신, **at()** 함수를 사용하자! 인덱스가 컨테이너 범위를 벗어나면 at()은 out_of_range 예외를 던지지만, [] 연산자는 미정의 동작(undefined behavior)을 유발한다.

<br>

---

## 알고리즘 사용하기
- std::sort(std::begin(vect), std::end(vect)); - 오름차순 정렬
- find_if(begin( ), end( ), return 타입이 bool인 함수)
- <https://en.cppreference.com/w/cpp/algorithm/find>
- for_each - 필요한 함수를 정의할 수 있어서 코드가 간결해진다. 오류 발생 가능성도 낮출 수 있다.