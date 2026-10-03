// Short, direct answers (roughly 40-60 words) so search and AI answer engines can quote them.
export const homeFaqs = [
  {
    q: "How do I connect my Android phone to Ubuntu?",
    a: "Install the Pzync .deb package on Ubuntu or another Debian-based system, and the Android app from Google Play. Join the same Wi-Fi, open both apps, and pair by confirming the matching code. Pzync then shares files, clipboard, audio and your phone camera with Ubuntu over your local network, with no account.",
  },
  {
    q: "How do I connect my Android phone to a Windows PC?",
    a: "Install Pzync on your phone from Google Play and on your Windows 10 or later PC, then join both to the same Wi-Fi. Open both apps, choose your computer on the phone, and confirm the matching code shown on both screens. After pairing, files, clipboard, audio and camera work over your local network.",
  },
  {
    q: "Can I transfer files from Android to Windows or Ubuntu without a cable?",
    a: "Yes. Pzync sends files directly between Android and Windows or Ubuntu over your local Wi-Fi, with live speed, pause and resume, and SHA-256 verification. Send from the Android Share menu or from the app. No cable, cloud upload or account is needed.",
  },
  {
    q: "Can I use my Android phone as a webcam on Windows or Ubuntu?",
    a: "Yes. Pzync streams your Android phone's camera to your computer as a virtual webcam on Windows and Ubuntu, with resolution and frame-rate controls. Ubuntu uses the v4l2loopback module. Start the stream on your phone, then choose the virtual camera in your video-call app.",
  },
  {
    q: "Is there a Phone Link alternative for Ubuntu?",
    a: "Microsoft Phone Link works on Windows only. Pzync connects Android to both Windows and Ubuntu, and adds clipboard sync, file transfer, audio streaming, a wireless webcam and microphone, and media and volume control, all directly over your local network without an account.",
  },
  {
    q: "Is Pzync free and open source?",
    a: "Yes. Pzync is free to download and open source under the MIT License, with no accounts or subscriptions. Files and clipboard content stay on your local network. The Android app sends anonymous usage analytics through Google Firebase, as explained in the privacy policy.",
  },
];

// Plain-text versions of the answers on the Support page, used for FAQ structured data.
export const supportFaqs = [
  {
    q: "My phone can't find my computer",
    a: "Make sure both devices are on the same Wi-Fi or local network, Pzync is open on the computer, and Pzync is allowed through the computer's firewall for private networks (UDP port 8200 and TCP port 8080). Turn off router client isolation and any VPN that hides the local network.",
  },
  {
    q: "The connection drops when my phone screen is off",
    a: "Android may stop background apps to save battery. Set Pzync's battery usage to unrestricted in your phone's settings and keep its notification enabled, so Android knows Pzync may keep running.",
  },
  {
    q: "The pairing codes don't match",
    a: "Do not accept the request. A mismatch means the two screens are not talking to each other directly. Cancel, check that you are on a network you trust, and try again.",
  },
  {
    q: "The webcam does not show up in my video-call app",
    a: "Start the camera stream on the phone first, then open or restart the app that uses it. On Ubuntu install the virtual camera module with sudo apt install v4l2loopback-dkms. On Windows the virtual camera is set up the first time you use it, so allow the permission prompt and restart the app.",
  },
  {
    q: "Screenshots are not reaching my computer",
    a: "Turn on Sync Screenshots to Desktop Clipboard in the Android clipboard settings, which is off by default, and allow access to photos when Android asks. Pzync syncs screenshots taken after you turn it on.",
  },
  {
    q: "Does Pzync send my files to the cloud?",
    a: "No. Files, clipboard, audio and camera go directly between your paired devices over your local network. The Android app does send anonymous usage analytics.",
  },
  {
    q: "Which platforms are supported?",
    a: "Android 7.0 or later on the phone, and Windows 10 or later (x64) or Debian-based Linux such as Ubuntu (amd64) on the computer. There is no iPhone or macOS version.",
  },
  {
    q: "How do I update Pzync?",
    a: "The desktop app checks for new releases and can update itself. The Android app updates through Google Play.",
  },
];
