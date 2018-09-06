function getAttributes() {
	const link = document.getElementById('w3r');
	let {href, hreflang, rel, target, type} = link;
	const atributes = {
		href: href,
		hreflang: hreflang,
		rel: rel,
		target: target,
		type: type
	}
	console.table(atributes);

	return atributes;
}



