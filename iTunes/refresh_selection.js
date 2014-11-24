#!/usr/bin/env osascript -l JavaScript
var app = Application("com.apple.iTunes");
var selection = app.selection();

Progress.description = "Refreshing tracks";
Progress.totalUnitCount = selection.length;

var i = 0;
for (var sel in selection) {
    selection[sel].refresh();
    Progress.completedUnitCount = ++i;
}
