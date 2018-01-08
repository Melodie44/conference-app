
class Layout{

    static render(){

        document.getElementsByTagName("body")[0].innerHTML = "<script type=\"text/javascript\" src=\"dist.js\"></script>"+
                                                         "<iframe src=\"./src/layout/layout.html\" style=\"border:none;\"></iframe>";
    }

}
exports.Layout = Layout;