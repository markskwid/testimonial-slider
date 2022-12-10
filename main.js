let slide_1 = $("#slide-1");
let slide_2 = $("#slide-2");
let btn_prev = $(".prev-btn");
let btn_next = $(".next-btn");
let boxes = $(".box");
var docWidth = window.innerWidth;

$(document).ready(() => {
  $(btn_next)
    .eq(0)
    .click(() => {
      $(slide_2).css("left", "-100%");
      $(slide_1).animate(
        {
          opacity: "0",
          left: "100%",
        },
        "slow"
      );

      setTimeout(() => {
        $(slide_2)
          .animate(
            {
              opacity: "1",
              left: $(".main-wrapper").width() / 2 - $(slide_2).width() / 2,
            },
            "slow"
          )
          .removeClass("right");
      }, 100);
    });

  $(btn_next)
    .eq(1)
    .click(() => {
      $(slide_1).css("left", "-100%");
      $(slide_2).animate(
        {
          opacity: "0",
          left: "100%",
        },
        "slow"
      );

      setTimeout(() => {
        $(slide_1).animate(
          {
            opacity: "1",
            left: $(".main-wrapper").width() / 2 - $(slide_1).width() / 2,
          },
          "slow"
        );
      }, 100);
    });

  $(btn_prev)
    .eq(0)
    .click(() => {
      $(slide_2).css("left", "100%");
      $(slide_1).animate(
        {
          opacity: "0",
          left: "-100%",
        },
        "slow"
      );

      setTimeout(() => {
        $(slide_2)
          .animate(
            {
              opacity: "1",
              left: $(".main-wrapper").width() / 2 - $(slide_2).width() / 2,
            },
            "slow"
          )
          .removeClass("right");
      }, 100);
    });

  $(btn_prev)
    .eq(1)
    .click(() => {
      $(slide_1).css("left", "100%");
      $(slide_2).animate(
        {
          opacity: "0",
          left: "-100%",
        },
        "slow"
      );

      setTimeout(() => {
        $(slide_1)
          .animate(
            {
              opacity: "1",
              left: $(".main-wrapper").width() / 2 - $(slide_1).width() / 2,
            },
            "slow"
          )
          .removeClass("right");
      }, 100);
    });
});
