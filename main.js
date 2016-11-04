require('JPViewController,UIColor,UIView,NSString,UIAlertView');
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
            }else{

            var message = NSString.stringWithFormat("self.dataSourse.count %ld  indexPath.row %ld ", dataSourse.length, index);
            var alert = UIAlertView.alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles(message, "", null, "OK", null, null);
            alert.show();

            }
            },
            });
