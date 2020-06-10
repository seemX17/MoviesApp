import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { ZoomMtg } from "@zoomus/websdk";

const apiUrl = "http://localhost:4000";
const apiKey = "gtnKORZMS1GNfaHQuRSAPw";
const leaveUrl = "http://localhost:4200";
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

@Component({
  selector: "app-zoom-test",
  templateUrl: "./zoom-test.component.html",
  styleUrls: ["./zoom-test.component.scss"],
})
export class ZoomTestComponent implements OnInit {


  signature: string = "";
  meetingNumber: number = 123456789;
  constructor() {}

  ngOnInit() {}

  createMeeting() {
    console.log("create meeting");
  }

  joinMeeting() {
    let payload = {
      meetingNumber: this.meetingNumber,
      role: 0, //1 to start, 0 to join
    };
    axios.post(apiUrl, payload).then((response) => {
      this.signature = response.data.signature;
      this.startMeeting(response.data.signature);
    });
  }

  startMeeting(signature) {
    document.getElementById("zmmtg-root").style.display = "block";
    debugger;
    ZoomMtg.init({
      leaveUrl: leaveUrl,
      isSupportAV: true,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          meetingNumber: this.meetingNumber,
          userName:"angular",
          apiKey: apiKey,
          userEmail: "",
          passWord: "",
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
