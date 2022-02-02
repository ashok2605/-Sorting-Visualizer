  //function for changing blocks with respect to random input
  let sort_algo_index = 0;
  let flag = 0;
  let delay = 3;
  let comparisonspeed = 600;


  $('.ui.icon')
      .popup();

  document.querySelector(".form-range").addEventListener("change", function(e) {
      delay = 1200 - 200 * parseInt(e.target.value);

      delay = 6 - parseInt(e.target.value);
  });

  function changeblocks() {
      let k = document.querySelector("#input").value.split(",");
      let innhtml = "";
      for (let i = 0; i < k.length; i++) {
          innhtml += `<div class="sc-jRQAMF eRnhep" style="order: 0;" id=${i} >${k[i]}</div>`;
      }
      document.querySelector(".horzx .nums").innerHTML = innhtml;

  }


  //function for changing blocks with respect to user input
  function changeinput(e) {

      let k = e.target.value;
      k = k.trim();

      let flag = 0;

      if (k.substring(k.length - 1) === ",") {
          k = k.substring(0, k.length - 1);
          flag = 1;
      }
      k = k.replace(/^,+|,+$/g, '');
      if (k === "") {
          document.querySelector("#size").value = 0;
          document.querySelector(".horzx .nums").innerHTML = "";
          return;
      }


      let arr = k.split(",");

      let innhtml = "";
      let val = "";
      let b = 0;
      for (let i = 0; i < arr.length; i++) {

          if (!isNaN(arr[i])) {
              if (i === 0) {
                  val = "" + arr[i];
              } else {
                  val = val + "," + arr[i];
              }
              b += 1;
              document.querySelector("#size").value = b;

              innhtml += `<div class="sc-jRQAMF eRnhep" style="order: 0;" id=${i} >${arr[i]}</div>`;
          } else {
              break;
          }




      }
      if (flag === 1) {
          val = val + ",";
      }
      document.querySelector("#input").value = val;

      if (document.querySelector("#input").value === "") {
          document.querySelector("#size").value = "" + 0;
      }
      document.querySelector(".horzx .nums").innerHTML = innhtml;

  }
  const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  function bubbleresolveAfter400milliSeconds(a, b) {
      return new Promise(resolve => {
          document.getElementById("" + a).style.backgroundColor = "red";
          document.getElementById("" + b).style.backgroundColor = "red";
          setTimeout(() => {
              document.getElementById("" + a).style.backgroundColor = "white";
              document.getElementById("" + b).style.backgroundColor = "white";
              resolve(parseInt(document.getElementById("" + a).innerHTML) > parseInt(document.getElementById("" + (b)).innerHTML));
          }, comparisonspeed);
      });
  }
  async function startbubblesort() {
      for (let i = document.querySelector(".nums").childNodes.length - 1; i >= 0; i--) {
          for (let j = 0; j < i; j++) {
              if (flag === 1) {
                  document.querySelector(".comparisons").innerHTML = "" + (parseInt(document.querySelector(".comparisons").innerHTML) + 1);
                  if (await bubbleresolveAfter400milliSeconds(j, j + 1)) {
                      document.getElementById("" + (j + 1)).style.backgroundColor = "yellow";
                      document.getElementById("" + j).style.backgroundColor = "yellow";

                      document.getElementById("" + j).animate([
                          // keyframes
                          {
                              transform: 'translate(0px,0px)'
                          }, {
                              transform: 'translate(0px,50px)'
                          }, {
                              transform: 'translate(50px,50px)'
                          }, {
                              transform: 'translate(50px,0px)'
                          }
                      ], {
                          // timing options
                          duration: delay * 1000,

                      });
                      document.getElementById("" + (j + 1)).animate([
                          // keyframes
                          {
                              transform: 'translate(0px,0px)'
                          }, {
                              transform: 'translate(0px,-50px)'
                          }, {
                              transform: 'translate(-50px,-50px)'
                          }, {
                              transform: 'translate(-50px,0px)'
                          }
                      ], {
                          // timing options
                          duration: delay * 1000,

                      });
                      setTimeout(function() {
                          if (flag === 1) {
                              document.querySelector(".swaps").innerHTML = "" + (parseInt(document.querySelector(".swaps").innerHTML) + 1);
                              document.getElementById("" + (j + 1)).style.backgroundColor = "white";
                              document.getElementById("" + j).style.backgroundColor = "white";
                              let a = document.getElementById("" + (j + 1)).innerHTML;
                              let b = document.getElementById("" + j).innerHTML;
                              document.getElementById("" + j).innerHTML = a;
                              document.getElementById("" + (j + 1)).innerHTML = b;
                          }
                      }, delay * 1000);
                      await sleep(delay * 1000 + 200);
                  }
              }
          }
          if (flag === 1) {
              document.getElementById("" + i).style.backgroundColor = "green";
          }
      }
  }

  function selectionresolveAfter400milliSeconds(a, b) {
      return new Promise(resolve => {
          document.getElementById("" + a).style.backgroundColor = "red";
          document.getElementById("" + b).style.backgroundColor = "red";
          setTimeout(() => {
              document.getElementById("" + a).style.backgroundColor = "white";
              document.getElementById("" + b).style.backgroundColor = "white";
              resolve(parseInt(document.getElementById("" + a).innerHTML) < parseInt(document.getElementById("" + (b)).innerHTML));
          }, comparisonspeed);
      });
  }
  async function startselectionsort() {

      for (var i = 0; i < document.querySelector(".nums").childNodes.length; i++) {
          var min_idx = i;
          if (flag === 1) {
              if (i === document.querySelector(".nums").childNodes.length - 1) {
                  document.getElementById("" + i).style.backgroundColor = "green";
              }

              for (var j = i + 1; j < document.querySelector(".nums").childNodes.length; j++) {
                  if (flag === 1) {
                      document.querySelector(".comparisons").innerHTML = "" + (parseInt(document.querySelector(".comparisons").innerHTML) + 1);


                      if (await selectionresolveAfter400milliSeconds(j, min_idx)) {
                          min_idx = j;
                      }
                  }
              }
              if (flag === 1) {
                  if (min_idx !== i) {
                      document.getElementById("" + (min_idx)).style.backgroundColor = "yellow";
                      document.getElementById("" + i).style.backgroundColor = "yellow";
                      document.getElementById("" + i).animate([
                          // keyframes
                          {
                              transform: 'translate(0px,0px)'
                          }, {
                              transform: 'translate(0px,50px)'
                          }, {
                              transform: `translate(${(min_idx-i)*50}px,50px)`


                          }, {
                              transform: `translate(${(min_idx-i)*50}px,0px)`
                          }
                      ], {
                          // timing options
                          duration: delay * 1000,

                      });
                      console.log(min_idx);
                      document.getElementById("" + (min_idx)).animate([
                          // keyframes
                          {
                              transform: 'translate(0px,0px)'
                          }, {
                              transform: 'translate(0px,-50px)'
                          }, {
                              transform: `translate(${-1*(min_idx-i)*50}px,-50px)`
                          }, {
                              transform: `translate(${-1*(min_idx-i)*50}px,0px)`
                          }
                      ], {
                          // timing options
                          duration: delay * 1000,

                      });

                      setTimeout(function() {
                          if (flag === 1) {

                              document.querySelector(".swaps").innerHTML = "" + (parseInt(document.querySelector(".swaps").innerHTML) + 1);
                              document.getElementById("" + (min_idx)).style.backgroundColor = "white";
                              document.getElementById("" + i).style.backgroundColor = "white";
                              let a = document.getElementById("" + (min_idx)).innerHTML;
                              let b = document.getElementById("" + i).innerHTML;
                              document.getElementById("" + i).innerHTML = a;
                              document.getElementById("" + (min_idx)).innerHTML = b;


                              document.getElementById("" + i).style.backgroundColor = "green";
                          }

                      }, delay * 1000);

                      await sleep(delay * 1000 + 200);
                  } else {
                      document.getElementById("" + i).style.backgroundColor = "green";
                  }


              }
          }

      }


  }

  async function startinsertionsort() {
      alert("Inside insertion sort");
      alert(delay);
  }

  async function startmergesort() {
      alert("Inside merge sort");
      alert(delay);
  }

  async function startquicksort() {
      alert("Insidequick sort");
      alert(delay);
  }
  $(".ui.icon.sort").on("click", function(e) {
      // alert(sort_algo_index);
      flag = 1;
      //alert(flag);

      if (document.querySelector("#input").value === "") {
          document.querySelector("#size").value = "" + 0;
      } else {
          document.querySelector("#size").value = "" + document.querySelector("#input").value.replace(/^,+|,+$/g, '').split(",").length;
      }
      document.querySelector("#size").readOnly = true;
      document.querySelector("#input").readOnly = true;

      e.target.style.display = "none";
      switch (sort_algo_index) {
          case 0:
              {

                  startbubblesort();
                  break;
              }
          case 1:
              {
                  startselectionsort();
                  break;
              }
          case 2:
              {
                  startinsertionsort();
                  break;
              }
          case 3:
              {
                  startquicksort();
                  break;
              }
          case 4:
              {
                  startmergesort();

              }

      }


  });
  $(".ui.icon.reset").on("click", function(e) {
      flag = 0;
      let obj = {
          target: document.querySelector("#input")
      };
      changeinput(obj);
      document.querySelector(".swaps").innerHTML = "" + 0;
      document.querySelector(".comparisons").innerHTML = "" + 0;
      document.querySelector("#size").readOnly = false;
      document.querySelector("#input").readOnly = false;
      document.querySelector(".ui.icon.sort").style.display = "inline-block";
      document.querySelector(".play.icon").style.display = "inline-block";

  })

  //function to make all algorithms content invisible 
  function makeinvisible() {
      document.querySelector("#Selection").style.display = "none";
      document.querySelector("#Insertion").style.display = "none";
      document.querySelector("#Quick").style.display = "none";
      document.querySelector("#Merge").style.display = "none";
      document.querySelector("#Bubble").style.display = "none";
  }


  $(document).ready(function() {
      $('.ui.accordion').accordion();
      makeinvisible();
      document.querySelector("#Bubble").style.display = "initial";
      document.querySelector(".Bubble").classList.add("active");

      let a = document.querySelectorAll("a.item");

      for (let i = 0; i < a.length; i++) {
          a[i].addEventListener("click", function() {

              makeinvisible();
              var k = `#${this.classList[1]}`;
              document.querySelector(k).style.display = "initial";
              let obj = {
                  target: document.querySelector("#input")
              };
              sort_algo_index = i;

              changeinput(obj);

              document.querySelector(".ui.icon.sort").style.display = "inline-block";
              document.querySelector(".play.icon").style.display = "inline-block";
              document.querySelector("#size").readOnly = false;
              document.querySelector("#input").readOnly = false;
              document.querySelector(".swaps").innerHTML = "" + 0;
              document.querySelector(".comparisons").innerHTML = "" + 0;
              flag = 0;







          });
      }


      $('#random').on('click', function() {
          if (flag == 0) {
              let a = document.querySelector("#size").value;
              if (a < 0) {
                  alert("Only positive values are allowed !!");
                  document.querySelector("#size").value = 0;
                  return;

              }
              if (a === "") {
                  alert("Size Required !! ")
              } else {
                  a = "" + a;

                  if (a.indexOf(".") !== -1) {
                      alert("Only Integer Values Are Allowed !!");
                  } else {
                      a = parseInt(a);
                      let z = "";
                      for (let i = 0; i < a - 1; i++) {
                          z += Math.floor(100 + Math.random() * 900) + ",";
                      }
                      if (a !== 0) {
                          z += Math.floor(100 + Math.random() * 900);
                      }

                      document.querySelector("#input").value = z;
                      if (a !== 0) {
                          changeblocks();
                      }
                  }
              }
          }
      });


      $("#input").on("input", changeinput);


  });
  $('.ui.menu a.item').on('click', function() {
      $(this)
          .addClass('active')
          .siblings()
          .removeClass('active');
  })