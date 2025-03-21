$(function(){
    // 로딩 페이지
    $('#overlay, #waitingModal').remove(); // 로딩 화면 제거
    $('#content').show(); // 콘텐츠 표시

    //toggle bttton click event
    $('.toggle_button').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.toggle_menu').fadeToggle();
    });

    // scroll event
    const $elementsUp = $(".element_up");
    const $elementsDown = $(".element_down");
    // 요소가 화면에 들어왔는지 확인하는 함수
    function isElementInViewport(elem) {
        const rect = $(elem)[0].getBoundingClientRect();
        const windowHeight = $(window).height();
        return rect.top <= windowHeight && rect.bottom >= 0;
    }
    // 스크롤 이벤트 처리 함수
    function handleScroll() {
        // .element-up에 대한 처리
        $elementsUp.each(function() {
            const $element = $(this);
            if (isElementInViewport($element)) {  // 요소가 화면에 들어오면
                $element.addClass("show");
            } //else {  // 화면 밖으로 나가면 show 클래스 제거
            //    $element.removeClass("show");
            //}
        });

        // .element-down에 대한 처리
        $elementsDown.each(function() {
            const $element = $(this);
            if (isElementInViewport($element)) {  // 요소가 화면에 들어오면
                $element.addClass("show");
            } //else {  // 화면 밖으로 나가면 show 클래스 제거
            //    $element.removeClass("show");
            //}
        });
    }
    // 페이지 로드 시 애니메이션 적용
    $(window).on("scroll", handleScroll);
    handleScroll();

    //swiper event
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,         // 한 번에 보이는 이미지 개수 (4개)
        spaceBetween: 10,         // 이미지 간격 (10px)
        autoplay: {
            delay: 1200,            // 3초마다 자동으로 슬라이드 이동
            disableOnInteraction: false,
        },
        loop: true,               // 슬라이드가 끝나면 처음으로 돌아가게
        //pagination: {
        //    el: ".swiper-pagination",
        //    clickable: true,
        //},
    });

    //swiper event 모바일
    var swiper = new Swiper(".mySwiper_m", {
        slidesPerView: 1,         // 한 번에 보이는 이미지 개수 (4개)
        spaceBetween: 10,         // 이미지 간격 (10px)
        autoplay: {
            delay: 1200,            // 3초마다 자동으로 슬라이드 이동
            disableOnInteraction: false,
        },
        loop: true,               // 슬라이드가 끝나면 처음으로 돌아가게
        //pagination: {
        //    el: ".swiper-pagination",
        //    clickable: true,
        //},
    });

    //<a> click scroll event
    $(".click_scroll a").on('click', function(event){
        event.preventDefault(); // 기본 이벤트 제거
        var target = $(this).attr("href"); // 클릭한 a 태그의 href 값 가져오기
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 600); // 부드럽게 이동
    });

    //<a> click scroll event(header)
    $("header a").on('click',function(event){
        event.preventDefault(); // 기본 이벤트 제거
        var target = $(this).attr("href"); // 클릭한 a 태그의 href 값 가져오기
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 0);
    });

    $(".image-link").on('click',function () {
        // 썸네일 이미지의 src 가져오기
        var imgSrc = $(this).find("img").attr("src");

        // 확대 이미지의 src 변경
        $(".modal-image").attr("src", imgSrc);

        // 모달 창 보이기
        $(".modal").fadeIn();
    });

    // 배경 클릭 시 모달 닫기
    $(".overlay").on('click',function () {
        $(".modal").fadeOut();
    });
});

