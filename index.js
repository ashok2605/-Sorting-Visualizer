  //function for changing blocks with respect to random input
  let sort_algo_index = 0;
  let flag = 0;
  let delay = 3;
  let comparisonspeed = 600;
  let reset_clicked = false;
  let first = null;
  let last = null;


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
          if (flag === 1 && sort_algo_index === 0 && reset_clicked === false) {
              document.getElementById("" + a).style.backgroundColor = "red";
              document.getElementById("" + b).style.backgroundColor = "red";

              setTimeout(() => {

                  document.getElementById("" + a).style.backgroundColor = "white";
                  document.getElementById("" + b).style.backgroundColor = "white";
                  resolve(parseInt(document.getElementById("" + a).innerHTML) > parseInt(document.getElementById("" + (b)).innerHTML));

              }, comparisonspeed);
          }
      });
  }



  async function startbubblesort() {
      for (let i = document.querySelector(".nums").childNodes.length - 1; i >= 0; i--) {


          for (let j = 0; j < i; j++) {


              if (flag === 1 && sort_algo_index === 0 && reset_clicked === false) {
                  document.querySelector(".comparisons").innerHTML = "" + (parseInt(document.querySelector(".comparisons").innerHTML) + 1);
                  if (await bubbleresolveAfter400milliSeconds(j, j + 1)) {

                      first = j + 1;
                      last = j
                      if (flag === 1 && sort_algo_index === 0 && reset_clicked === false) {

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


                              if (flag === 1 && sort_algo_index === 0 && reset_clicked === false) {
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
          }

          if (flag === 1 && sort_algo_index === 0 && reset_clicked === false) {
              document.getElementById("" + i).style.backgroundColor = "green";
          }

      }
  }





  function selectionresolveAfter400milliSeconds(a, b) {
      return new Promise(resolve => {
          if (flag === 1 && sort_algo_index === 1 && reset_clicked === false) {
              document.getElementById("" + a).style.backgroundColor = "red";
              document.getElementById("" + b).style.backgroundColor = "red";
              setTimeout(() => {
                  document.getElementById("" + a).style.backgroundColor = "white";
                  document.getElementById("" + b).style.backgroundColor = "white";
                  resolve(parseInt(document.getElementById("" + a).innerHTML) < parseInt(document.getElementById("" + (b)).innerHTML));

              }, comparisonspeed);
          }
      });
  }




  async function startselectionsort() {

      for (var i = 0; i < document.querySelector(".nums").childNodes.length; i++) {
          var min_idx = i;
          if (flag === 1 && sort_algo_index === 1 && reset_clicked === false) {
              if (i === document.querySelector(".nums").childNodes.length - 1) {
                  document.getElementById("" + i).style.backgroundColor = "green";
              }

              for (var j = i + 1; j < document.querySelector(".nums").childNodes.length; j++) {
                  if (flag === 1 && sort_algo_index === 1 && reset_clicked === false) {
                      document.querySelector(".comparisons").innerHTML = "" + (parseInt(document.querySelector(".comparisons").innerHTML) + 1);


                      if (await selectionresolveAfter400milliSeconds(j, min_idx)) {
                          min_idx = j;
                      }
                  }
              }
              if (flag === 1 && sort_algo_index === 1 && reset_clicked === false) {
                  if (min_idx !== i) {
                      first = min_idx;
                      last = i;
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
                          if (flag === 1 && sort_algo_index === 1 && reset_clicked === false) {

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


  function insertionresolveAfter400milliSeconds(a, b) {
      return new Promise(resolve => {
          if (flag === 1 && sort_algo_index === 2 && reset_clicked === false) {

              document.getElementById("" + a).style.backgroundColor = "red";
              document.getElementById("" + b).style.backgroundColor = "red";


              setTimeout(() => {

                  document.getElementById("" + a).style.backgroundColor = "white";
                  document.getElementById("" + b).style.backgroundColor = "white";
                  resolve(parseInt(document.getElementById("" + a).innerHTML) > parseInt(document.getElementById("" + (b)).innerHTML));

              }, comparisonspeed);
          }
      });
  }



  async function startinsertionsort() {
      for (let i = 1; i < document.querySelector(".nums").childNodes.length; i++) {




          for (let j = i - 1; j >= 0 && await insertionresolveAfter400milliSeconds(j, j + 1); j--) {
              if (flag === 1 && sort_algo_index === 2 && reset_clicked === false) {
                  document.querySelector(".comparisons").innerHTML = "" + (parseInt(document.querySelector(".comparisons").innerHTML) + 1);




                  first = j;
                  last = j + 1;
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


                      if (flag === 1 && sort_algo_index === 2 && reset_clicked === false) {
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
          if (flag === 1 && sort_algo_index === 2 && reset_clicked === false) {
              for (let k = i; k >= 0; k--) {
                  document.getElementById("" + (k)).style.backgroundColor = "green";
              }
          }
      }
  }



  function quickresolveAfter400milliSeconds(a, b) {
      return new Promise(resolve => {
          if (flag === 1 && sort_algo_index === 3 && reset_clicked === false) {
              document.getElementById("" + a).style.backgroundColor = "red";
              document.getElementById("" + b).style.backgroundColor = "red";
              setTimeout(() => {
                  document.getElementById("" + a).style.backgroundColor = "white";
                  document.getElementById("" + b).style.backgroundColor = "white";
                  resolve(parseInt(document.getElementById("" + a).innerHTML) < parseInt(document.getElementById("" + (b)).innerHTML));

              }, comparisonspeed);
          }
      });
  }

  async function partition(low, high) {
      if (flag === 1 && sort_algo_index === 3 && reset_clicked === false) {
          let x = low - 1;
          for (let i = low; i < high; i++) {

              if (await quickresolveAfter400milliSeconds(i, high)) {
                  if (flag === 1 && sort_algo_index === 3 && reset_clicked === false) {
                      document.querySelector(".comparisons").innerHTML = "" + (parseInt(document.querySelector(".comparisons").innerHTML) + 1);
                      x++;
                      if (x != i) {
                          let xx = (i - x) * 50;
                          let yy = (-1) * xx;
                          first = x;
                          last = i;
                          document.getElementById("" + (x)).style.backgroundColor = "yellow";
                          document.getElementById("" + i).style.backgroundColor = "yellow";
                          document.getElementById("" + x).animate([
                              // keyframes
                              {
                                  transform: 'translate(0px,0px)'
                              }, {
                                  transform: 'translate(0px,50px)'
                              }, {
                                  transform: `translate(${xx}px,50px)`
                              }, {
                                  transform: `translate(${xx}px,0px)`
                              }
                          ], {
                              // timing options
                              duration: delay * 1000,

                          });
                          document.getElementById("" + (i)).animate([
                              // keyframes
                              {
                                  transform: 'translate(0px,0px)'
                              }, {
                                  transform: 'translate(0px,-50px)'
                              }, {
                                  transform: `translate(${yy}px,-50px)`
                              }, {
                                  transform: `translate(${yy}px,0px)`
                              }
                          ], {
                              // timing options
                              duration: delay * 1000,

                          });
                          setTimeout(function() {
                              if (flag === 1 && sort_algo_index === 3 && reset_clicked === false) {
                                  document.querySelector(".swaps").innerHTML = "" + (parseInt(document.querySelector(".swaps").innerHTML) + 1);
                                  document.getElementById("" + (x)).style.backgroundColor = "white";
                                  document.getElementById("" + i).style.backgroundColor = "white";
                                  let a = document.getElementById("" + (i)).innerHTML;
                                  let b = document.getElementById("" + x).innerHTML;
                                  document.getElementById("" + x).innerHTML = a;
                                  document.getElementById("" + (i)).innerHTML = b;
                              }
                          }, delay * 1000);
                          await sleep(delay * 1000 + 200);
                      }
                  }
              }
          }
          if (flag === 1 && sort_algo_index === 3 && reset_clicked === false) {
              if (high != (x + 1)) {
                  let xxx = (high - x - 1) * 50;
                  let yyy = (-1) * xxx;
                  first = x + 1;
                  last = high;
                  document.getElementById("" + (x + 1)).style.backgroundColor = "yellow";
                  document.getElementById("" + high).style.backgroundColor = "yellow";
                  document.getElementById("" + (x + 1)).animate([
                      // keyframes
                      {
                          transform: 'translate(0px,0px)'
                      }, {
                          transform: 'translate(0px,50px)'
                      }, {
                          transform: `translate(${xxx}px,50px)`
                      }, {
                          transform: `translate(${xxx}px,0px)`
                      }
                  ], {
                      // timing options
                      duration: delay * 1000,

                  });
                  document.getElementById("" + high).animate([
                      // keyframes
                      {
                          transform: 'translate(0px,0px)'
                      }, {
                          transform: 'translate(0px,-50px)'
                      }, {
                          transform: `translate(${yyy}px,-50px)`
                      }, {
                          transform: `translate(${yyy}px,0px)`
                      }
                  ], {
                      // timing options
                      duration: delay * 1000,

                  });
                  setTimeout(function() {
                      if (flag === 1 && sort_algo_index === 3 && reset_clicked === false) {
                          document.querySelector(".swaps").innerHTML = "" + (parseInt(document.querySelector(".swaps").innerHTML) + 1);
                          document.getElementById("" + (x + 1)).style.backgroundColor = "white";
                          document.getElementById("" + high).style.backgroundColor = "white";
                          let a = document.getElementById("" + high).innerHTML;
                          let b = document.getElementById("" + (x + 1)).innerHTML;
                          document.getElementById("" + (x + 1)).innerHTML = a;
                          document.getElementById("" + high).innerHTML = b;
                      }
                  }, delay * 1000);
                  await sleep(delay * 1000 + 200);
              }
          }
          if (flag === 1 && sort_algo_index === 3 && reset_clicked === false) {
              document.getElementById("" + (x + 1)).style.backgroundColor = "green";
          }
          return x + 1;
      }
  }




  async function startquicksort(low, high) {
      if (flag === 1 && sort_algo_index === 3 && reset_clicked === false) {
          if (low === high) {
              document.getElementById("" + low).style.backgroundColor = "green";
          }
          if (low < high) {
              let pivot = await partition(low, high);



              await startquicksort(low, pivot - 1);

              await startquicksort(pivot + 1, high);

          }
      }
  }







  async function startmergesort() {
      alert("Inside merge sort");
      alert(delay);
  }





  $(".ui.icon.sort").on("click", function(e) {
      document.querySelector(".ui.icon.reset").style.opacity = "1";
      document.querySelector(".ui.icon.reset").style.display = "inline-block";
      document.querySelector(".redo.icon").style.display = "inline-block";
      // alert(sort_algo_index);
      flag = 1;
      reset_clicked = false;
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
                  startquicksort(0, document.querySelector("#input").value.replace(/^,+|,+$/g, '').split(",").length - 1);
                  break;
              }
          case 4:
              {
                  startmergesort();
                  break;

              }

      }


  });





  $(".ui.icon.reset").on("click", async function(e) {
      if (flag === 1) {
          this.style.opacity = "0.3";
          reset_clicked = true;
          alert(`wait for ${delay} seconds`);

          await sleep(delay * 1000);

          flag = 0;
          let obj = {
              target: document.querySelector("#input")
          };
          if (first !== null) {
              $("#" + first).stop(true);
              document.getElementById("" + first).style.backgroundColor = "white";
              first = null;
          }
          if (last !== null) {
              $("#" + last).stop(true);
              document.getElementById("" + last).style.backgroundColor = "white";
              last = null;
          }
          changeinput(obj);
          document.querySelector(".swaps").innerHTML = "" + 0;
          document.querySelector(".comparisons").innerHTML = "" + 0;
          document.querySelector("#size").readOnly = false;
          document.querySelector("#input").readOnly = false;
          e.target.style.display = "none";
          document.querySelector(".ui.icon.sort").style.display = "inline-block";
          document.querySelector(".play.icon").style.display = "inline-block";
      }


  });




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
              reset_clicked = false;
              flag = 0;
              if (first !== null) {
                  $("#" + first).stop(true);
                  document.getElementById("" + first).style.backgroundColor = "white";
                  first = null;
              }
              if (last !== null) {
                  $("#" + last).stop(true);
                  document.getElementById("" + last).style.backgroundColor = "white";
                  last = null;
              }

              document.querySelector(".ui.icon.sort").style.opacity = "1";

              changeinput(obj);

              document.querySelector(".ui.icon.sort").style.display = "inline-block";
              document.querySelector(".play.icon").style.display = "inline-block";
              document.querySelector(".ui.icon.reset").style.display = "none";

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
  });