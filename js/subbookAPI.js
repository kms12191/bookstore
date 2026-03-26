// sub-main_book

async function bookData() {
            const params = new URLSearchParams({
                target: "title",
                query: "시험"
            });
            
            const url = `https://dapi.kakao.com/v3/search/book?${params}`;

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Authorization: `KakaoAK 075f6cd693c270228fc9fc2c238a73cd`
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
                }

                const data = await response.json();

                // 요소 선택
                const mainBox = document.querySelector(".main_book");
                const bookTitle = document.querySelector(".book_title")
                const contextBox = document.querySelector(".contextbox");
                const priceNum = document.querySelector(".pricenum");
                const personAut = document.querySelector(".author");

                // 데이터에서 필요한 값 추출
                const book = data.documents[0];
                const { title, thumbnail, authors, price, contents } = book;

                // 요소 생성 및 추가
                // 요소 생성 및 추가
                mainBox.innerHTML = `<img src="${thumbnail}">`

                bookTitle.innerHTML = `<h3>${title}</h3>`
                priceNum.textContent += price + "원";
                personAut.textContent += authors;

                contextBox.innerHTML = `<p>${authors[0]}</p>
                <p>${contents}</p>
                <span>자세히보기</span>
                `
            } catch (error) {
                console.log('에러발생', error);
            }
        }

        bookData();

        //메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임
        document.addEventListener("DOMContentLoaded", async function () {
            try {
                const response = await fetch("./sub_txt/txt1.txt");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.text();
                document.getElementById("tmpBox").innerHTML = data;
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        });

