# Copyright (c) 2024, Hamza Alsaqaf and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class RideBoking(Document):
	def validate(self):
		if not self.rate:
			frappe.throw(__("pleas provide a rate"))
		total_destance=0
		for item in self.items:
			total_destance +=item.distance_in_km
		self.total_amount=total_destance*self.rate
		