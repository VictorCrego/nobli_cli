class PageChanger{
    constructor(pageThis){
        this.pageThis = pageThis;
    }

    changeToMainPage(){
        this.pageThis.$router.push('/');
    }
    changeToQRCodePage(){
        this.pageThis.$router.push('/QrCodeScreen');
    }
    changeToRedirectPage(){
        this.pageThis.$router.push('/Redirect');
    }
    changeToShowsAndEvents(){
        this.pageThis.$router.push('/ShowsEventos');
    }
    changeToBarsAndRestaurantsPage(){
        this.pageThis.$router.push('/BaresRestaurantes');
    }
    changeToLocalMenuPage(){
        this.pageThis.$router.push('/LocalMenu');
    }
}

export default PageChanger;