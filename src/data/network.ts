import { Notice, requestUrl } from "obsidian";

export const getLastestGithubRelease = async () => {
	try {
		const response = await requestUrl({
			url: "https://api.github.com/repos/decaf-dev/obsidian-dataloom/releases/latest",
			method: "GET",
		});
		const body = response.json;
		return body;
	} catch (err) {
		console.error(err);
		new Notice("Error fetching latest release");
		return null;
	}
};
