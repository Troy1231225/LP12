$(function() {
  $(window).load(function() {
    // autospin1();
    setButtonHeight();
  }
                 );
  function dateOffset(j, a) {
    var l = new Boolean(null == j || 0 == j || void 0 == j || "" == j),
        e = new Date(Date.now() - 24 * j * 60 * 60 * 1000);
    1 == l && (j = 0);
    var k = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        i = ["January", "February", "March", "April", "Maybe", "June", "July", "August", "September", "October", "November", "December"];
    return null != !a && 0 != !a && void 0 != !a ? e.getDate() + " " + i[e.getMonth()] : "day_name_only" == a && l ? k[e.getDay()] : "top_date" == a && l ? k[e.getDay()] + ", " + e.getDate() + " " + i[e.getMonth()] + " " + e.getFullYear() : void 0
  }
  function countdown() {
    var e = parseInt(document.getElementById("mins").innerHTML),
        f = parseInt(document.getElementById("hsecs").innerHTML),
        g = 0,
        h = 0;
    0 !== e && 0 === f ? (g = e - 1, h = 59) : 0 !== e || 0 !== f ? (g = e, h = f - 1) : 0 === e && 0 === f && (g = e, h = f), h < 10 && (h = "0" + h),
      document.getElementById("mins").textContent = g, 
      document.getElementById("hsecs").textContent = h
  };
  $('#topDate').html(dateOffset(0, 'top_date'));
  $('.item_date-0').html(dateOffset(0));
  $('.item_date-1').html(dateOffset(1));
  $('.item_date-2').html(dateOffset(2));
  $('.item_date-3').html(dateOffset(3));
  function exit_a1() {
    window.onbeforeunload = null, window.location = $('#target-link').attr('href') }
  var conMid, mydate = new Date,
      year = mydate.getFullYear(),
      month = mydate.getMonth(),
      day = mydate.getDate(),
      weekday = mydate.getDay(),
      count = 1,
      headline = document.getElementById("headline"),
      topDate = document.getElementById("topDate"),
      today = document.getElementById("today"),
      con = document.getElementById("container"),
      whCon = document.getElementById("wheelCon"),
      dWheel = document.getElementById("wheel"),
      button = document.getElementById("pressButton"),
      device = document.getElementById("devMockup"),
      first = document.getElementById("firstpage"),
      second = document.getElementById("secondpage"),
      modalTryAgain = document.getElementById("modalTryAgain");
  function setButtonHeight() {
    conMid = (whCon.getBoundingClientRect().bottom - whCon.getBoundingClientRect().top) / 2, button.style.top = conMid - button.offsetHeight / 2 - 0.2 * button.offsetHeight / 2 + "px" }
  function spin() {
    switch (count) {
      case 1:
        button.disabled = !0, dWheel.className = "spinAround", setTimeout(function() {
          button.disabled = !1;
          // alert("You have 1 extra spin!\n\nTry again!");
          modalTryAgain.classList.add('active');
          // autospin2();
        }
                                                                           , 6800);
        break;
      case 2:
        dWheel.className = "spinAround2",
          setTimeout(function() {
            dWheel.className = dWheel.className + " transparent"
          }
                      , 6800),
          setTimeout(function() {
            device.style.display = "block",
              device.style.left = whCon.offsetWidth / 2 - device.offsetWidth / 2 + "px",
              device.style.top = conMid - device.offsetHeight / 2 + "px"
          }
                      , 7000),
          setTimeout(function() {
            var loaderSrc = $('.loader').attr('src');
            $('#firstpage').html("<img src='" + loaderSrc + "'>");
            first.style.padding = "195px 0px",
              setTimeout(function() {
                first.parentNode.removeChild(first),
                  second.style.display = "block",
                  con.insertBefore(second, con.firstChild),
                  setInterval(function() {
                    countdown()
                  }
                               , 1000);
              }
                          , 1500)
          }
                      , 9000)
    }
    count++;
    // console.log(count);
  }
  function autospin2() {
    spin();
  }
  function autospin1() {
    document.getElementById("pressButton").click();
  }
  $('#pressButton').on('click', function() {
    spin();
  }
                       );
  $('#spinButton').on('click', function() {
    spin();
  }
                      );
  $('#btnTryAgain').on('click', function() {
    $('#modalTryAgain').removeClass('active');
    autospin2();
  }
                       );
}
  );
