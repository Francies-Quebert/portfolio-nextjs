import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "./firebase";

export async function getImageUrl(imagePath: string) {
    try {
        const url = await getDownloadURL(ref(storage, imagePath))
        return url;
    } catch (error) {
        console.error('Error fetching image from firebase',error);
        // Handle errors
        return null;
    }
}
