import CategoryCard from "./CategoryCard";
import OTC from '../../../assets/CategoryIcons/OTC.png'
import women from '../../../assets/CategoryIcons/women.png'
import baby from '../../../assets/CategoryIcons/baby.webp'
import dental from '../../../assets/CategoryIcons/dental.png'
import personal from '../../../assets/CategoryIcons/personal.png'
import prescription from '../../../assets/CategoryIcons/prescription.png'
import sexual from '../../../assets/CategoryIcons/sexual.png'
import diabatic from '../../../assets/CategoryIcons/diabetic.png'

const Categories= () => {
    return (
        <div className="my-8">
            <h1 className="text-3xl mb-6">Categories :</h1>
            <div className="flex items-center gap-4 flex-wrap">
                <CategoryCard icon={OTC} iconName={'OTC medicine'}/>
                <CategoryCard icon={women} iconName={'For Women'}/>
                <CategoryCard icon={baby} iconName={'Baby Care'}/>
                <CategoryCard icon={dental} iconName={'Dental Care'}/>
                <CategoryCard icon={personal} iconName={'Personal Care'}/>
                <CategoryCard icon={prescription} iconName={'Prescription Medicine'}/>
                <CategoryCard icon={sexual} iconName={'Prescription Medicine'}/>
                <CategoryCard icon={diabatic} iconName={'Diabetic Care'}/>
            </div>
        </div>
    );
};

export default Categories;