#!/usr/bin/env osascript -l JavaScript
var app = Application("com.apple.iTunes");
var selection = app.selection();

Progress.description = "Refreshing tracks";
Progress.totalUnitCount = selection.length;

var i = 0;
for (var sel in selection) {
	try {
	    selection[sel].refresh();
	} catch (e) { } // cloud tracks don't understand refresh(), and I don't know how to tell if a track is local or not
    Progress.completedUnitCount = ++i;
}
