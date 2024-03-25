// Copyright (c) 2024, Hamza Alsaqaf and contributors
// For license information, please see license.txt

frappe.ui.form.on('Ride Boking', {
	// refresh: function(frm) {
	// 	let total_destance = 0
	// 	frm.doc.items.forEach(function (item) {
	// 		total_destance += item.distance_in_km
	// 		frm.doc.total_amount = total_destance * frm.doc.rate
	// 	})	
	// },
	rate: function (frm) {
		frm.trigger("update_total_amount")//trigger==> it will get the function and pass frm pram to it
		// let total_destance = 0
		// frm.doc.items.forEach(function (item) {
		// 	total_destance += item.distance_in_km
		// })
		// let total_amount = total_destance * frm.doc.rate
		// frm.set_value("total_amount", total_amount)
		// console.log(frm.doc.total_amount);
	},
	update_total_amount(frm) {
		let total_d = 0
		for (let item of frm.doc.items) {
			total_d += item.distance_in_km
			console.log(item.distance_in_km)
		}
		const total_amount = total_d * frm.doc.rate
		frm.set_value("total_amount", total_amount)
	},
	
});
frappe.ui.form.on('Ride Item', {
	refresh(frm) {
		// your code here
	},
	distance_in_km(frm, cdt, cdn) {
		// console.log(cdt,cdn)
		// console.log(frappe.get_doc(cdt,cdn));
		// let my_child=frappe.get_doc(cdt, cdn)
		// frappe.model.set_value(cdt, cdn,"source","Updated source");
		frm.trigger("update_total_amount")//trigger==> it will get the function and pass frm pram to it
	},
	items_remove(frm,cdt,cdn) {
		frm.trigger("update_total_amount")//trigger==> it will get the function and pass frm pram to it
		console.log("items Remove")
	},
})