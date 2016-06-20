"Generated from Java with JSweet 1.1.0 - http://www.jsweet.org";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var applet;
(function (applet) {
    var Applet = java.applet.Applet;
    var Button = java.awt.Button;
    var Color = java.awt.Color;
    var GridLayout = java.awt.GridLayout;
    var TextField = java.awt.TextField;
    var AppletExample = (function (_super) {
        __extends(AppletExample, _super);
        function AppletExample() {
            _super.call(this);
            this.msg = " ";
            this.b = new Array(10);
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.EventListener", "java.awt.event.ActionListener", "java.awt.MenuContainer", "javax.accessibility.Accessible", "java.awt.image.ImageObserver", "java.io.Serializable"] });
            this.v1 = 0;
            this.v2 = 0;
            this.result = 0;
            this.OP = null;
        }
        AppletExample.prototype.init = function () {
            var k = new Color(120, 89, 90);
            this.setBackground(k);
            this.t1 = new TextField(10);
            var gl = new GridLayout(4, 5);
            this.setLayout(gl);
            for (var i = 0; i < 10; i++) {
                this.b[i] = new Button("" + i);
            }
            this.__add = new Button("add");
            this.sub = new Button("sub");
            this.mul = new Button("mul");
            this.div = new Button("div");
            this.mod = new Button("mod");
            this.clear = new Button("clear");
            this.EQ = new Button("EQ");
            this.t1.addActionListener(this);
            this.add(this.t1);
            for (var i = 0; i < 10; i++) {
                this.add(this.b[i]);
            }
            this.add(this.__add);
            this.add(this.sub);
            this.add(this.mul);
            this.add(this.div);
            this.add(this.mod);
            this.add(this.clear);
            this.add(this.EQ);
            for (var i = 0; i < 10; i++) {
                this.b[i].addActionListener(this);
            }
            this.__add.addActionListener(this);
            this.sub.addActionListener(this);
            this.mul.addActionListener(this);
            this.div.addActionListener(this);
            this.mod.addActionListener(this);
            this.clear.addActionListener(this);
            this.EQ.addActionListener(this);
        };
        AppletExample.prototype.actionPerformed = function (ae) {
            var str = ae.getActionCommand();
            console.info("action performed: " + str);
            var ch = str.charAt(0);
            if (javaemul.internal.CharacterHelper.isDigit(ch))
                this.t1.setText(this.t1.getText() + str);
            else if ((str === "add")) {
                this.v1 = javaemul.internal.IntegerHelper.parseInt(this.t1.getText());
                this.OP = '+';
                this.t1.setText("");
            }
            else if ((str === "sub")) {
                this.v1 = javaemul.internal.IntegerHelper.parseInt(this.t1.getText());
                this.OP = '-';
                this.t1.setText("");
            }
            else if ((str === "mul")) {
                this.v1 = javaemul.internal.IntegerHelper.parseInt(this.t1.getText());
                this.OP = '*';
                this.t1.setText("");
            }
            else if ((str === "div")) {
                this.v1 = javaemul.internal.IntegerHelper.parseInt(this.t1.getText());
                this.OP = '/';
                this.t1.setText("");
            }
            else if ((str === "mod")) {
                this.v1 = javaemul.internal.IntegerHelper.parseInt(this.t1.getText());
                this.OP = '%';
                this.t1.setText("");
            }
            if ((str === "EQ")) {
                this.v2 = javaemul.internal.IntegerHelper.parseInt(this.t1.getText());
                if (this.OP === '+')
                    this.result = this.v1 + this.v2;
                else if (this.OP === '-')
                    this.result = this.v1 - this.v2;
                else if (this.OP === '*')
                    this.result = this.v1 * this.v2;
                else if (this.OP === '/')
                    this.result = (this.v1 / this.v2 | 0);
                else if (this.OP === '%')
                    this.result = this.v1 % this.v2;
                this.t1.setText("" + this.result);
            }
            if ((str === "clear")) {
                this.t1.setText("");
            }
        };
        AppletExample.serialVersionUID = 1;
        return AppletExample;
    }(Applet));
    applet.AppletExample = AppletExample;
})(applet || (applet = {}));
//# sourceMappingURL=AppletExample.js.map