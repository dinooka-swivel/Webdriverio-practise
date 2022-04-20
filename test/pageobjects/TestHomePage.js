
const Page = require('./page');


class TestHomePage extends Page 
{
    get btnLogout(){
        return  $(".//i[@class='icon-2x icon-signout']");
        //return $('i= Logout');
        }
    
    get actualPageText()
    {
        let a =  $(".//div[@id='flash']");
        return a;
    }
    
     async Logout()
    {    
        await this.btnLogout.click();  
        
    }

}
module.exports = new TestHomePage();
















