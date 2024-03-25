// Copyright (c) 2024, Hamza Alsaqaf and contributors
// For license information, please see license.txt

frappe.ui.form.on('Ride Order', {
	setup(frm) {
		console.log("Running in Setup")
	},
	onload(frm) {
		console.log("Running in onload")

	},
	refresh: function (frm) {
		console.log("Running in refresh")

		if(frm.doc.status==="New")
		{
			frm.add_custom_button("Accept", () => {
				frm.set_value("status", "Accepted")
				//set status==> Accepted
				frappe.show_alert('Document status Updated', 5);
				// save the form
				frm.save()
			},"Actions")
			frm.add_custom_button("Rejected", () => {
				frm.set_value("status", "Rejected")
				//set status==> Accepted
				frappe.show_alert('Document status Updated', 5);
				// save the form
				frm.save()
			},"Actions")
		}
	},
	status:function(frm){
		console.log("change");
	},
});
