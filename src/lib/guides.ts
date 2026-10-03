// Search-intent landing pages. Every claim here is taken from the Pzync apps' code or README.
export interface GuideSection {
  title: string;
  paragraphs?: string[];
  list?: string[];
  code?: string;
}

export interface Guide {
  slug: string;
  /** <title> without the site suffix. Keep under ~52 characters. */
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  /** Opening definition: the sentence search and AI answer engines quote. */
  intro: string;
  /** Short label used in cards and footer links. */
  cardTitle: string;
  cardText: string;
  requirements: [string, string][];
  howToName: string;
  steps: string[];
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  related: string[];
}

const REQ_COMMON: [string, string][] = [
  ["Phone", "Android 7.0 or later"],
  ["Network", "Phone and computer on the same Wi-Fi or local network"],
  ["Ports", "UDP 8200 (discovery) and TCP 8080 (connection)"],
  ["Cost", "Free, open source (MIT License)"],
];

export const guides: Guide[] = [
  {
    slug: "connect-android-to-ubuntu",
    metaTitle: "Connect Android to Ubuntu: Free, Open-Source App",
    metaDescription:
      "Connect your Android phone to Ubuntu over Wi-Fi with Pzync. Send files, sync the clipboard, stream audio and use your phone as a webcam. Free, no account.",
    eyebrow: "Android to Ubuntu",
    h1: "Connect your Android phone to Ubuntu",
    intro:
      "Pzync is a free, open-source app that connects an Android phone to Ubuntu, or any Debian-based Linux system, over your local Wi-Fi. Install the .deb package on Ubuntu and the app from Google Play on your phone, pair them once, and you can send files, share the clipboard, stream audio and use your phone as a webcam.",
    cardTitle: "Connect Android to Ubuntu",
    cardText: "Install, pair and share files, clipboard and camera.",
    requirements: [
      ["Computer", "Ubuntu or another Debian-based Linux, amd64 (.deb package)"],
      ...REQ_COMMON,
    ],
    howToName: "How to connect an Android phone to Ubuntu with Pzync",
    steps: [
      "Download the Pzync .deb package for Ubuntu from the downloads section and install it with your package manager.",
      "Install the Pzync app on your Android phone from Google Play.",
      "Connect the phone and the Ubuntu computer to the same Wi-Fi or local network.",
      "Open Pzync on both devices. Your Ubuntu computer appears in the device list on the phone.",
      "Tap your computer to request pairing, check that the matching code on both screens is identical, and accept on Ubuntu.",
    ],
    sections: [
      {
        title: "Install the .deb package on Ubuntu",
        paragraphs: [
          "From the folder where you saved the download, this installs Pzync and any dependencies it needs:",
        ],
        code: "sudo apt install ./Pzync_*_amd64.deb",
      },
      {
        title: "What you can do once Android and Ubuntu are connected",
        list: [
          "Send files in both directions with live speed, pause and resume, and SHA-256 verification.",
          "Share the clipboard between your phone and Ubuntu.",
          "Copy new phone screenshots straight to the Ubuntu clipboard.",
          "Stream your Ubuntu system audio to your phone.",
          "Use your phone as a wireless webcam or microphone on Ubuntu.",
          "Control media playback and volume on Ubuntu from your phone.",
        ],
      },
      {
        title: "Allow Pzync through the Ubuntu firewall",
        paragraphs: [
          "If you use UFW and your phone cannot find your computer, allow the two ports Pzync uses. Only do this on a network you trust:",
        ],
        code: "sudo ufw allow 8080/tcp\nsudo ufw allow 8200/udp",
      },
      {
        title: "Packages for webcam and screen capture",
        paragraphs: [
          "The phone webcam uses the v4l2loopback kernel module. The remote terminal and screen capture rely on a few common tools:",
        ],
        code: "sudo apt install v4l2loopback-dkms\nsudo apt install scrot xdotool wmctrl gnome-screenshot",
      },
    ],
    faqs: [
      {
        q: "How do I connect my Android phone to Ubuntu?",
        a: "Install the Pzync .deb package on Ubuntu and the Pzync app from Google Play on your phone. Join both to the same Wi-Fi, open the apps, tap your computer on the phone, and confirm that the matching code on both screens is the same. Pzync then connects the two directly over your local network.",
      },
      {
        q: "Is there free software to connect Android to Ubuntu?",
        a: "Yes. Pzync is free and open source under the MIT License. It sends files, syncs the clipboard, streams audio and turns your phone into a webcam or microphone for Ubuntu, with no account and no cloud server.",
      },
      {
        q: "Why can't my Android phone find my Ubuntu computer?",
        a: "Check that both devices are on the same Wi-Fi, that Pzync is open on Ubuntu, and that the firewall allows UDP port 8200 and TCP port 8080. Routers with client isolation and active VPNs can also hide devices from each other.",
      },
      {
        q: "Does Pzync need an internet connection?",
        a: "Devices talk to each other directly over your local network, and files never go through a cloud server. The desktop app checks GitHub for updates, and the Android app is installed and updated through Google Play.",
      },
    ],
    related: ["android-phone-as-webcam", "transfer-files-android-to-pc", "sync-clipboard-android-to-pc"],
  },
  {
    slug: "connect-android-to-windows",
    metaTitle: "Connect Android to Windows: Free, Open-Source App",
    metaDescription:
      "Connect your Android phone to a Windows PC over Wi-Fi with Pzync. Transfer files, sync the clipboard, stream audio and use your phone as a webcam. Free.",
    eyebrow: "Android to Windows",
    h1: "Connect your Android phone to Windows",
    intro:
      "Pzync is a free, open-source app that connects an Android phone to a Windows 10 or later PC over your local Wi-Fi. Install the Windows installer and the Android app, pair them once by confirming a matching code, and you can transfer files, sync the clipboard, stream PC audio and use your phone as a wireless webcam or microphone.",
    cardTitle: "Connect Android to Windows",
    cardText: "Pair your phone with a Windows PC in a few minutes.",
    requirements: [
      ["Computer", "Windows 10 or later, x64 (.exe installer)"],
      ...REQ_COMMON,
    ],
    howToName: "How to connect an Android phone to a Windows PC with Pzync",
    steps: [
      "Download the Pzync Windows installer (.exe) from the downloads section and run it.",
      "Install the Pzync app on your Android phone from Google Play.",
      "Connect the phone and the PC to the same Wi-Fi or local network.",
      "Open Pzync on both devices. Your PC appears in the device list on the phone.",
      "Tap your PC to request pairing, check that the matching code on both screens is identical, and accept on the PC.",
    ],
    sections: [
      {
        title: "Allow Pzync through Windows Firewall",
        paragraphs: [
          "The first time Pzync runs, Windows may ask whether to allow it on your network. Allow it on private networks so your phone can reach the PC. Pzync uses UDP port 8200 for discovery and TCP port 8080 for the connection.",
        ],
      },
      {
        title: "What you can do once Android and Windows are connected",
        list: [
          "Send files in both directions with live speed, pause and resume, and SHA-256 verification.",
          "Share the clipboard between your phone and your PC.",
          "Copy new phone screenshots straight to the Windows clipboard.",
          "Stream your PC audio to your phone.",
          "Use your phone as a wireless webcam or microphone on Windows.",
          "Control media playback and volume on your PC from your phone.",
        ],
      },
      {
        title: "Using the phone as a webcam on Windows",
        paragraphs: [
          "Pzync includes a virtual camera component and registers it the first time you use the camera. Windows may ask for permission. If the camera does not show up in an app, restart that app once after the first start.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I connect my Android phone to a Windows PC without a cable?",
        a: "Install Pzync on both devices, join the same Wi-Fi, open both apps, tap your PC on the phone, and confirm the matching code. Pzync connects directly over your local network, so you do not need a USB cable, a cloud account or Bluetooth.",
      },
      {
        q: "Is Pzync an alternative to Microsoft Phone Link?",
        a: "It covers some of the same ground, such as sharing files and the clipboard, and adds audio streaming, a wireless webcam and microphone, and media and volume control. Pzync works without a Microsoft account, and it also supports Ubuntu, which Phone Link does not.",
      },
      {
        q: "Does Pzync work on Windows 11?",
        a: "Pzync supports Windows 10 and later on 64-bit (x64) computers, which includes Windows 11.",
      },
      {
        q: "Why can't my phone find my Windows PC?",
        a: "Make sure both devices are on the same Wi-Fi, Pzync is open on the PC, and Windows Firewall allows Pzync on private networks. Some routers isolate Wi-Fi clients from each other, and a VPN can hide the local network.",
      },
    ],
    related: ["android-phone-as-webcam", "transfer-files-android-to-pc", "sync-clipboard-android-to-pc"],
  },
  {
    slug: "android-phone-as-webcam",
    metaTitle: "Android Phone as a Webcam for Ubuntu & Windows",
    metaDescription:
      "Turn your Android phone into a wireless webcam for Ubuntu or Windows with Pzync. No cable, with resolution and FPS controls. Free and open source.",
    eyebrow: "Android webcam",
    h1: "Use your Android phone as a wireless webcam",
    intro:
      "Pzync turns your Android phone into a wireless webcam for Ubuntu and Windows. The phone camera streams over your local Wi-Fi to a virtual camera on your computer, so any video-call or recording app that lets you choose a camera can use it, with resolution and frame-rate controls and no cable.",
    cardTitle: "Android phone as a webcam",
    cardText: "Wireless HD webcam for Ubuntu and Windows.",
    requirements: [
      ["Computer", "Windows 10 or later (x64), or Ubuntu / Debian-based Linux (amd64)"],
      ["Linux extra", "v4l2loopback kernel module"],
      ...REQ_COMMON,
    ],
    howToName: "How to use an Android phone as a webcam on Ubuntu or Windows with Pzync",
    steps: [
      "Install Pzync on your phone and computer and pair them (see the connection guide for your system).",
      "On Ubuntu, install the virtual camera module with sudo apt install v4l2loopback-dkms. On Windows, allow the permission prompt the first time you use the camera.",
      "Open the camera feature in the Pzync Android app and allow camera access.",
      "Choose your resolution and frame rate, then start the stream.",
      "In your video-call or recording app, select the virtual camera as your camera. Restart the app if it does not appear.",
    ],
    sections: [
      {
        title: "Set up the virtual camera on Ubuntu",
        paragraphs: [
          "On Ubuntu the webcam uses the v4l2loopback kernel module to create a virtual camera device. Install it once:",
        ],
        code: "sudo apt install v4l2loopback-dkms",
      },
      {
        title: "Set up the virtual camera on Windows",
        paragraphs: [
          "Pzync includes a virtual camera component and registers it the first time you start the camera. Windows may ask for permission. If your app does not list the camera, restart that app once.",
        ],
      },
      {
        title: "Why use Pzync as a webcam",
        list: [
          "Wireless: the stream goes over your local Wi-Fi, with no USB cable.",
          "Private: video goes directly from your phone to your computer, not through a cloud server.",
          "Adjustable: choose the resolution and frame rate.",
          "Free and open source, with no account.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I use my Android phone as a webcam on Ubuntu?",
        a: "Install Pzync on Ubuntu and Android and pair them, then install the v4l2loopback-dkms package on Ubuntu. Start the camera stream in the Android app and select the virtual camera in your video-call app. The stream goes over your local Wi-Fi without a cable.",
      },
      {
        q: "Can I use my Android phone as a webcam on Windows without a cable?",
        a: "Yes. Pzync streams your phone's camera over Wi-Fi to a virtual camera on Windows 10 or later. Start the stream in the Android app, then choose the virtual camera in the app you want to use. Windows may ask for permission the first time.",
      },
      {
        q: "Does the phone webcam work with video-call apps?",
        a: "It works with apps that let you choose a camera, because Pzync appears on your computer as a virtual camera. Select it in the app's video settings, and restart the app if it does not show up.",
      },
      {
        q: "Does the camera stream go through the internet?",
        a: "No. The video is sent directly from your phone to your computer over your local network, not through a cloud server.",
      },
    ],
    related: ["connect-android-to-ubuntu", "connect-android-to-windows", "transfer-files-android-to-pc"],
  },
  {
    slug: "transfer-files-android-to-pc",
    metaTitle: "Transfer Files from Android to Ubuntu or Windows PC",
    metaDescription:
      "Send files between Android and Ubuntu or Windows over Wi-Fi with Pzync. No cable or cloud, with live speed, pause and resume, and SHA-256 checks. Free.",
    eyebrow: "File transfer",
    h1: "Transfer files between Android and your PC",
    intro:
      "Pzync sends files directly between an Android phone and a Windows or Ubuntu computer over your local Wi-Fi. There is no cable, cloud upload or account, and each transfer shows live speed and remaining time, can be paused and resumed, and is verified with a SHA-256 hash.",
    cardTitle: "Transfer files, Android to PC",
    cardText: "Wi-Fi file transfer with live speed and verification.",
    requirements: [
      ["Computer", "Windows 10 or later (x64), or Ubuntu / Debian-based Linux (amd64)"],
      ...REQ_COMMON,
    ],
    howToName: "How to transfer files between Android and a PC with Pzync",
    steps: [
      "Install Pzync on your phone and computer and pair them over the same Wi-Fi.",
      "To send from the phone, open the Android Share menu on any file or photo and choose Pzync, or pick files inside the app.",
      "Choose your computer as the destination and watch the progress and speed.",
      "To send from the computer to the phone, use the transfer view in the desktop app and pick the phone.",
      "Find received files in the Downloads folder on your computer, or in the received files screen on your phone.",
    ],
    sections: [
      {
        title: "How Pzync file transfer works",
        list: [
          "Direct: files go from one device to the other over your local network.",
          "Visible: live MB/s throughput and estimated time remaining.",
          "Controllable: pause and resume a transfer.",
          "Verified: a SHA-256 hash check confirms the file arrived intact.",
          "Convenient: send from the Android Share menu without opening the app first.",
          "Tray progress: the desktop app shows transfer progress in the system tray.",
        ],
      },
      {
        title: "Related: send screenshots without sending files",
        paragraphs: [
          "If you only need to move screenshots, turn on Sync Screenshots to Desktop Clipboard in the Android app. Each new screenshot is copied to your computer's clipboard, ready to paste.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I transfer files from Android to Ubuntu wirelessly?",
        a: "Install Pzync on both devices, join the same Wi-Fi, and pair them. Then share any file from Android's Share menu and choose Pzync. The file goes directly to your Ubuntu computer over the local network, with live speed and a SHA-256 integrity check.",
      },
      {
        q: "Can I transfer files from Android to a PC without a cable or cloud?",
        a: "Yes. Pzync sends files directly between your phone and your Windows or Ubuntu computer over your local Wi-Fi. Nothing is uploaded to a cloud server, and no account is needed.",
      },
      {
        q: "Where do received files go?",
        a: "On the computer, files received from your phone are saved to your Downloads folder. On the phone, you can browse received files from the received files screen in the Pzync app.",
      },
      {
        q: "How do I know a transferred file is not corrupted?",
        a: "Pzync verifies each file with a SHA-256 hash after the transfer, so a damaged or incomplete file is detected rather than silently accepted.",
      },
    ],
    related: ["connect-android-to-ubuntu", "connect-android-to-windows", "sync-clipboard-android-to-pc"],
  },
  {
    slug: "sync-clipboard-android-to-pc",
    metaTitle: "Sync Clipboard Between Android and Ubuntu or Windows",
    metaDescription:
      "Copy on your Android phone and paste on Ubuntu or Windows, and back. Pzync syncs the clipboard over Wi-Fi, plus phone screenshots. Free and open source.",
    eyebrow: "Universal clipboard",
    h1: "Sync your clipboard between Android and your PC",
    intro:
      "Pzync syncs the clipboard between an Android phone and a Windows or Ubuntu computer in both directions over your local network. Copy text on one device and paste it on the other, and optionally send every new phone screenshot to your computer's clipboard.",
    cardTitle: "Sync the clipboard, Android and PC",
    cardText: "Copy on your phone, paste on Ubuntu or Windows.",
    requirements: [
      ["Computer", "Windows 10 or later (x64), or Ubuntu / Debian-based Linux (amd64)"],
      ...REQ_COMMON,
    ],
    howToName: "How to sync the clipboard between Android and a PC with Pzync",
    steps: [
      "Install Pzync on your phone and computer and pair them over the same Wi-Fi.",
      "In the desktop app, keep Universal Clipboard turned on for your phone.",
      "Copy text on your phone, then paste on your computer. Copy on your computer and paste on your phone.",
      "Optional: add the Pzync clipboard tile to Android Quick Settings to sync with one tap.",
      "Optional: in the Android clipboard settings, turn on Sync Screenshots to Desktop Clipboard.",
    ],
    sections: [
      {
        title: "What the clipboard sync covers",
        list: [
          "Text copied on either device.",
          "Copied files and images, where the desktop app supports them.",
          "New phone screenshots, if you turn on screenshot sync (off by default).",
        ],
      },
      {
        title: "Quick Settings tile",
        paragraphs: [
          "Android's Quick Settings can include a Pzync tile that syncs your clipboard immediately, so you do not need to open the app.",
        ],
      },
      {
        title: "Privacy",
        paragraphs: [
          "Clipboard content moves directly between your paired devices over your local network and is never sent to a cloud server. Only pair devices you own or trust, since a paired device can read what you copy.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I copy text from Android to Ubuntu?",
        a: "Install Pzync on both devices and pair them over the same Wi-Fi. Copy the text on your phone and paste it on Ubuntu. Clipboard sync works in both directions, and the Android Quick Settings tile can trigger a sync with one tap.",
      },
      {
        q: "Can I send Android screenshots to my PC clipboard automatically?",
        a: "Yes. Turn on Sync Screenshots to Desktop Clipboard in the Pzync Android app and allow access to photos. Each new screenshot you take is copied to your computer's clipboard, ready to paste. The setting is off by default.",
      },
      {
        q: "Is my clipboard sent to the cloud?",
        a: "No. Clipboard content goes directly between your paired phone and computer over your local network, not through a cloud server.",
      },
    ],
    related: ["connect-android-to-ubuntu", "connect-android-to-windows", "transfer-files-android-to-pc"],
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
