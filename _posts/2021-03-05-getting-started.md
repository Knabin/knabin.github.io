---
title: 1. 시작하기
author: 구름
date: 2021-03-05 00:12:00 +0900
categories: [Rust, The Rust Programming Language]
tags: [Rust]
image:
    src: /assets/img/rust/rust.png
    alt: rust
---

## Rust
```rust
fn main() {
	// 파라미터가 없고, 아무것도 반환하지 않는 main 함수
}
```
- main 함수 - Rust 프로그램에서 첫 번째로  실행되는 코드.

<br>

```rust
fn main() {
	println!("Hello, world!");
}
```
- Rust 매크로(macro) - ```println!``` 처럼 '!'이 붙어 있다. 만일 함수라고 불리려면 ! 없이 println으로 입력되어 있어야 한다.

<br>

---

## 컴파일과 실행
```shell
rustc main.rs
```
![rust-1](/assets/img/rust/21-03-05-1.png)

- 점점 프로젝트가 커지면서 모든 옵션을 관리하고 코드 공유에 있어 편리함을 얻기 위해 Cargo라는 도구를 사용한다.


<br>

---

## Cargo
- Cargo(카고): Rust의 빌드 시스템 및 패키지 매니저.
- Cargo는 코드 빌드, 종속 라이브러리를 다운하고 해당 라이브러리를 빌드하는 등 많은 작업들을 다룬다.

```shell
cargo new hello_cargo --bin
cd hello_cargo
```
![rust-2](/assets/img/rust/21-03-05-2.png)
![rust-3](/assets/img/rust/21-03-05-3.png)

Cargo.toml
```toml
[package]
name = "hello_cargo"
version = "0.1.0"
authors = ["YOUR NAME"]
edition = "2018"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
```
- Cargo의 환경설정 포맷. TOML (Tom's Obvious, Minimal Language).
- ```[package]```는 이후 문장들이 패키지 환경설정이라는 걸 나타내는 섹션의 시작 지점이다. 그 다음 라인들은 Cargo가 컴파일하기 위해 필요로 하는 정보에 대한 설정이다.
- ```[dependencies]```는 프로젝트의 의존성 리스트를 적을 수 있는 섹션의 시작 지점이다. Rust에서는 코드의 패키지를 크레이트(crate)라고 부르는데, 현재 다른 크레이트가 필요하지 않기 때문에 넘어가도록 한다.

<br>

- 폴더 구조
  - hello_cargo ← .gitignore, README, 라이센스 정보, 환경 파일 등
    - .git
    - src       ← 소스 파일
    - target    ← 빌드 관련

<br>

```shell
cargo build
```
- 프로젝트 폴더에서 위와 같이 빌드 후, target/debug/hello_cargo.exe 실행.

<br>

```shell
cargo run
```
- 또는 프로젝트 폴더에서 위와 같이 빌드 후 실행 파일을 실행할 수도 있다.

<br>

```shell
cargo check
```
- ```cargo check```는 코드가 컴파일되는지를 확인해 주고, 실행 파일을 생성하지는 않는다.
- 실행 파일 생성하는 단계를 생략하기 때문에 종종 check가 build보다 빠를 수 있다. 코드를 작성하는 동안 계속해서 코드를 검사해야 한다면, build보다는 check를 사용하는 게 빠를 수 있다.

<br>

```shell
cargo build --release
```
- 배포할 준비가 되었으면, 최적화와 함께 빌드할 수 있다. 해당 커맨드는 target/debug 대신 target/release에 실행 파일을 생성한다.
- 최적화는 Rust 코드를 더 빠르게 만들어 주지만, 최적화를 켜면 프로그램 컴파일이 오래 걸린다.

<br>

---

## 비주얼 스튜디오 코드에서 Rust 사용하기

- 회사에서 R&D 중이어서 기존 VS2019를 사용하고 싶었지만, 따로 지원이 되지 않는 듯하여 VSCode를 설치해 보았다.

Rust & Cargo
: [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)

VSCode
: [https://code.visualstudio.com/](https://code.visualstudio.com/)

- ```Ctrl+Shift+X```를 누르거나, 좌측에 퍼즐 모양을 눌러서 확장 탭을 연다.
- 영문판이 어색하다면, Korean을 쳐서 한글 패키지부터 설치해 두면 좋다.

- 나는 다음과 같이 설치했다.

![rust-3](/assets/img/rust/21-03-05-3.png)

```cargo``` 명령어로 프로젝트를 만들고, 폴더를 열어서 사용하면 되는 듯하다.

```Ctrl+Shift+B```를 누르면 방금 실습했던 ```cargo build```와 ```cargo check```를 확인할 수 있다.

<br>

![rust-4](/assets/img/rust/21-03-05-4.png)

코드 영역의 우측 상단에 있는 Run Code 버튼 또는 ```Ctrl+Alt+N```을 누르면 실행도 가능하다.

<br>

![rust-5](/assets/img/rust/21-03-05-5.png)

VSCode에 익숙해지니까 터미널에서 원하는 작업을 바로바로 실행하는 게 더 편한 것 같다.