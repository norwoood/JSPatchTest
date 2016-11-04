require('JPViewController,UIColor,UIView');
defineClass('JPTableViewController', {
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            var datasourse = self.dataSourse().toJS()
            var index = indexPath.row()
            console.log("comeon.....")
            console.log(index)
            console.log(datasourse)
            if (datasourse.length > index) {
            console.log("success.....")

            var content = datasourse[index]; //可能会超出数组范围导致crash
            var ctrl = JPViewController.alloc().initWithContent(content);
            ctrl.view().setBackgroundColor(UIColor.redColor());
            self.navigationController().pushViewController_animated(ctrl, YES);
            }
            },
            });
