// #new .swiper-slide
async function bookData() {
    const params = new URLSearchParams({
        target: "publisher",
        query: "에스티유니타스",
        size: 25
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`

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
                    <h4>${data.documents[i].title}</h4>
                    <h6>${data.documents[i].authors}</h6>
                    <p>${data.documents[i].price}</p>
                    `
        });

    } catch (error) {
        console.log('에러발생', error);
    }
}




//bsetSeller

async function fetchBooks(query) {
    const params = new URLSearchParams({
        target: "title",
        query,
        size: 20
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: "KakaoAK 075f6cd693c270228fc9fc2c238a73cd"
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
    }

    return response.json();
}

async function bestData() {
    try {
        const queries = [
            { query: "요리", sectionId: "tab1" },
            { query: "축구", sectionId: "tab2" },
        ];

        for (const { query, sectionId } of queries) {
            const data = await fetchBooks(query);
            console.log(data)

            // 해당 섹션 내의 .box 요소 8개 선택
            const section = document.querySelector(`#${sectionId}`);
            const boxElements = section.querySelectorAll(".box");

            boxElements.forEach((box, i) => {
                const doc = data.documents[i + 1];
                if (!doc) return;

                // 요소 생성 및 추가
                box.innerHTML = `<img src="${data.documents[i].thumbnail}">
                    <h4>${data.documents[i].title}</h4>
                    <h6>${data.documents[i].authors}</h6>
                    <p>${data.documents[i].price}</p>
                    `
            });
        }
    } catch (error) {
        console.log('에러발생', error);
    }
}


const tabItems = document.querySelectorAll('#booktab li');
const tabs = document.querySelectorAll('article');

tabItems.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        // 탭에 해당하는 리스트 보이고, 나머지는 숨기기
        tabs.forEach((tab, j) => {
            tab.style.display = (i === j) ? 'flex' : 'none';
        });

    });
});


window.addEventListener('load', () => {
    bookData();
    bestData();
})
