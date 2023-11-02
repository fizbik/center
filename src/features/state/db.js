import Dexie from "dexie";

export const db = new Dexie("centerDB");

db.version(1).stores({
  integrations: "++id, vendorID, field1, field2",
  vendors: "id, name, url, field1, field2",
});

export function init() {
  seedVendors();
}

export function seedVendors() {
  // GitHub
  db.vendors.put({});
}
