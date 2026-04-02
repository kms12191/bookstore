// sub-main_book

async function mainBook() {
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
                const bookTitle = document.querySelectorAll(".book_title")
                const contextBox = document.querySelector(".contextbox");
                const priceNum = document.querySelector(".pricenum");
                const personAut = document.querySelector(".author");
                const pubEl = document.querySelector(".pub");
                const saleNum = document.querySelectorAll(".salenum");



                // 데이터에서 필요한 값 추출
                const book = data.documents[0];
                const { title, thumbnail, authors, price, contents, sale_price, publisher } = book;
                console.log(sale_price)

                // 요소 생성 및 추가
                // 요소 생성 및 추가
                mainBox.innerHTML = `<img src="${thumbnail}">`

                bookTitle[0].innerHTML = `<h3>${title}</h3>`
                bookTitle[1].innerHTML = `<h3>${title}</h3>`
                priceNum.textContent += price.toLocaleString() + "원";
                saleNum[0].textContent += sale_price.toLocaleString() + "원";
                personAut.textContent += authors;
                pubEl.textContent += publisher;
                saleNum[1].textContent += (sale_price + 3000).toLocaleString() + "원";
                saleNum[2].textContent += (sale_price + 3000).toLocaleString() + "원";
                

                contextBox.innerHTML = `
                <img src="../img/bookmain.jpg" alt="책 메인이미지">
                `
            } catch (error) {
                console.log('에러발생', error);
            }
        }

        mainBook();

        //메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임
        //기본정보
        document.addEventListener("DOMContentLoaded", async function () {
            try {
                const response = await fetch("./txt/sub_txt1.txt");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.text();
                document.getElementById("tmpBox").innerHTML = data;
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        });
        //배송/교환/반품
        document.addEventListener("DOMContentLoaded", async function () {
            try {
                const response = await fetch("./txt/sub_txt2.txt");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.text();
                document.getElementById("delivery").innerHTML = data;
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        });
        //분철안내
        document.addEventListener("DOMContentLoaded", async function () {
            try {
                const response = await fetch("./txt/sub_txt3.txt");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.text();
                document.getElementById("info").innerHTML = data;
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        });


// tabs
// 탭메뉴
const tabMenu = document.querySelectorAll('.tab_menu li');
const tabContent = document.querySelectorAll('.tabcontent');
const tabHeights = [300, 300, 300, 300]; // 원하는 높이
const tabExpandHeights = [6599, 1200, 800, 900]; // 더보기 높이
// 더보기
const tab = document.querySelector('.tabs');
const btns = document.querySelectorAll('.tabcontent button');

// 탭메뉴 클릭
tabMenu.forEach((tm, i) => {
  tm.addEventListener('click', () => {
    tabMenu.forEach(item => item.classList.remove('active'));
    tm.classList.add('active');

    tabContent.forEach((tc, j) => {
      if (i === j) {
        tc.style.display = 'flex';

        // ⭐ 1번 탭만 더보기 구조
        if (i === 0) {
          tc.style.height = '300px';
          tab.style.height = '360px';
          btns[0].innerText = '더보기';
        } else {
          // ⭐ 나머지 탭은 자동 높이
          tc.style.height = 'auto';
          tab.style.height = 'auto';
        }

      } else {
        tc.style.display = 'none';
      }
    });
  });
});


btns[0].addEventListener('click', () => {
  const tc = tabContent[0];

  if (btns[0].textContent === '더보기') {
    tc.style.height = 'auto';
    tab.style.height = 'auto';
    btns[0].innerText = '접기';
  } else {
    tc.style.height = '300px';
    tab.style.height = '360px';
    btns[0].innerText = '더보기';
  }
});


//     tabContent.forEach((tc, j) => {
//       if (i === j) {
//         tc.style.display = 'flex';
//         tc.style.height = tabHeights[i] + 'px';
//         tab.style.height = (tabHeights[i] + 65) + 'px';
//         btns[i].innerText = '더보기';
//       } else {
//         tc.style.display = 'none';
//       }
//     });
//   });
// });

// btns.forEach((btn, i) => {
//   btn.addEventListener('click', () => {
//     const tc = tabContent[i];

//     if (btn.textContent === '더보기') {
//       tc.style.height = tabExpandHeights[i] + 'px';
//       tab.style.height = (tabExpandHeights[i] + 65) + 'px';
//       btn.innerText = '접기';
//     } else {
//       tc.style.height = tabHeights[i] + 'px';
//       tab.style.height = (tabHeights[i] + 65) + 'px';
//       btn.innerText = '더보기';
//     }
//   });
// });

// // 더보기 클릭
// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     if (btn.textContent == '더보기') {
//       tab.style.height = '6655px';
//       tabContent.forEach(tc => {
//         tc.style.height = '6600px';
//       });
//       btn.innerText = '접기'
//     } else {
//       tab.style.height = '360px';
//       tabContent.forEach(tc => {
//         tc.style.height = '300px';
//       });
//       btn.innerText = '더보기'
//     }
//   });
// });       




async function newBookData() {
    const params = new URLSearchParams({
        target: "author",
        query: "최태성",
        size: 10
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK 075f6cd693c270228fc9fc2c238a73cd"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll("#new .swiper-slide");
        console.log(boxElements)

        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // 요소 생성 및 추가
            box.innerHTML = `<img src="${data.documents[i].thumbnail}">
            <div class='slider_content'>
                <h3>${data.documents[i].title}</h3>
                <h4>${data.documents[i].authors}·${data.documents[i].publisher}</h4>
                <p>${data.documents[i].sale_price.toLocaleString()}원</p>
            </div>
                    `
        });

    } catch (error) {
        console.log('에러발생', error);
    }
}


newBookData();

//swiper//
var swiper = new Swiper(".newSwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      freeMode: true,
      rewind: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });