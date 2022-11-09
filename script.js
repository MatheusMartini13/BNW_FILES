const box1 = document.getElementById("postHere")
const box2 = document.getElementById("code")
const box3 = document.getElementById("titPost")

function createScript() {
  let text = box1.value
  let newText = text.split("\n")
  let realText = `[dohtml]
<center>
  <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans|Signika" rel="stylesheet">
  <div style="width: 540px;min-height: 300px;background: rgb(0, 0, 0);padding: 45px;outline: 1px solid #fff0f0;outline-offset: 5px;margin: 15px;">
    <div style="width: 470px;height: 200px;border-top: 3px double rgb(255, 255, 255);border-left: 3px double rgb(255, 255, 255);float: left;position: absolute;">
    </div>
    <div style="text-align: justify;font: 12px/19px 'Alegreya Sans';padding: 65px 75px;color: rgb(255, 255, 255);">
      <div style="text-align: center;font-family: Signika;font-size: 25px;margin-bottom: 15px;padding: 10px;text-transform:uppercase;letter-spacing: -2px;">` + box3.value + `</div>`
  newText.forEach(element => {
    if (element === ""){
      realText += "<br>"
    } else {
      realText += element + "<br>"
    }
  }
  );
  realText += `</div>
  <div style="width: 470px;height: 200px;border-bottom: 3px double rgb(255, 255, 255);border-right: 3px double rgb(255, 255, 255);margin-top: -205px;margin-right: -85px;">
  </div>
  </div>
  <a href="http://is.gd/rossr" style="font: 7px/25px Trajan Pro; letter-spacing: 1px;">© ROSS</a>
</center>
[/dohtml]`

  box2.value = realText
}