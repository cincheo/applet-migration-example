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
    /**
     * This is the modernized version of the applet, which separates the logic from
     * the view.
     *
     * The separation is done by replacing the "add" of components by a "bind"
     * operation.
     */
    var AppletExampleModernized = (function (_super) {
        __extends(AppletExampleModernized, _super);
        function AppletExampleModernized() {
            _super.call(this);
            this.msg = " ";
            this.b = new Array(10);
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.EventListener", "java.awt.event.ActionListener", "java.awt.MenuContainer", "javax.accessibility.Accessible", "java.awt.image.ImageObserver", "java.io.Serializable"] });
            this.v1 = 0;
            this.v2 = 0;
            this.result = 0;
            this.OP = null;
        }
        AppletExampleModernized.prototype.bind = function (c, index) {
            c["bind"]("cmp" + index);
        };
        AppletExampleModernized.prototype.init = function () {
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
            var index = 0;
            this.bind(this.t1, index++);
            for (var i = 0; i < 10; i++) {
                this.bind(this.b[i], index++);
            }
            this.bind(this.__add, index++);
            this.bind(this.sub, index++);
            this.bind(this.mul, index++);
            this.bind(this.div, index++);
            this.bind(this.mod, index++);
            this.bind(this.clear, index++);
            this.bind(this.EQ, index++);
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
        AppletExampleModernized.prototype.actionPerformed = function (ae) {
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
        AppletExampleModernized.serialVersionUID = 1;
        return AppletExampleModernized;
    }(Applet));
    applet.AppletExampleModernized = AppletExampleModernized;
})(applet || (applet = {}));
//# sourceMappingURL=AppletExampleModernized.js.map