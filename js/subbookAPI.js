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
                

                contextBox.innerHTML = `<p>${authors[0]}</p>
                <br>
                <p>${contents}</p>
                <img src="../img/bookmain.jpg" alt="책 메인이미지">
                `
            } catch (error) {
                console.log('에러발생', error);
            }
        }

        mainBook();

        //메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임
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





// tabs
// 탭메뉴
const tabMenu = document.querySelectorAll('.tab_menu li');
const tabContent = document.querySelectorAll('.tabcontent');
// 더보기
const tab = document.querySelector('.tabs');
const btns = document.querySelectorAll('.tabcontent button');

// 탭메뉴 클릭
tabMenu.forEach((tm, i) => {
  tm.addEventListener('click', () => {
    // 모든 탭 메뉴에서 'active' 클래스 제거
    tabMenu.forEach(item => {
      item.classList.remove('active');
    });

    // 클릭한 탭 메뉴에만 'active' 클래스 추가
    tm.classList.add('active');

    // 탭에 해당하는 리스트 보이고, 나머지는 숨기기
    tabContent.forEach((tc, j) => {
      tc.style.display = (i === j) ? 'flex' : 'none';
      tab.style.height = '350px';
      tc.style.height = '295px';
      btns[i].innerText = '더보기'
    });
  });
});

// 더보기 클릭
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.textContent == '더보기') {
      tab.style.height = '2780px';
      tabContent.forEach(tc => {
        tc.style.height = '2728px';
      });
      btn.innerText = '접기'
    } else {
      tab.style.height = '350px';
      tabContent.forEach(tc => {
        tc.style.height = '300px';
      });
      btn.innerText = '더보기'
    }
  });
});       



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