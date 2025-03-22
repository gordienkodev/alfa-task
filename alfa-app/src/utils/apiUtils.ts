import axios from "axios";
import { API_URLS } from "../constants";
import { IBreedImage, IBreedListType } from "../interfaces";

export const fetchDogBreeds = async (): Promise<IBreedListType> => {
  try {
    const response = await axios.get(API_URLS.DOG_BREEDS_LIST);
    return response.data.message;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export const fetchRandomImageBreed = async (
  breedName: string,
): Promise<IBreedImage> => {
  try {
    const response = await axios.get(
      `${API_URLS.DOGS_API_URL}breed/${breedName}/images/random`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
