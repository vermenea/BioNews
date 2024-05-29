from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

NEWS = [
    {
        'id': 'n1',
        'slug': 'sequencing-of-human-brain-uncovers-new-gene-transcripts',
        'title': 'Sequencing of the human brain uncovers new gene transcripts',
        'image': 'sequencing.jpg',
        'date': '2024-03-01',
        'content': 'Researchers uncovered 214,516 unique isoforms in the developing neocortex -- over 70% of which have not been previously studied.',
    },
    {
        'id': 'n2',
        'slug': 'drug-like-inhibitor-preventing-flu',
        'title': 'Drug-like inhibitor shows promise in preventing flu',
        'image': 'medicine.jpg',
        'date': '2022-05-01',
        'content': 'Currently available flu medications only target the virus after it has already established an infection, but what if a drug could prevent infection in the first place? Now, scientists have designed drug-like molecules to do just that, by thwarting the first stage of influenza infection.',
    },
    {
        'id': 'n3',
        'slug': 'gene-regulating-human-brain',
        'title': 'Scientists map networks regulating gene function in the human brain',
        'image': 'brain.jpg',
        'date': '2021-02-01',
        'content': 'A consortium of researchers has produced the largest and most advanced multidimensional maps of gene regulation networks in the brains of people with and without mental disorders. These maps detail the many regulatory elements that coordinate the brains biological pathways and cellular functions. The research used postmortem brain tissue from over 2,500 donors to map gene regulation networks across different stages of brain development and multiple brain-related disorders.',
    },
    {
        'id': 'n4',
        'slug': 'new-approach-epstein-virus',
        'title': 'New approach to Epstein-Barr virus and resulting diseases',
        'image': 'virus.jpg',
        'date': '2024-01-01',
        'content': 'The Epstein-Barr virus can cause a spectrum of diseases, including a range of cancers. Emerging data now show that inhibition of a specific metabolic pathway in infected cells can diminish latent infection and therefore the risk of downstream disease.',
    },
    {
        'id': 'n5',
        'slug': 'predicting-cancer-risks',
        'title': 'Predicting cancer risks on the basis of national health data',
        'image': 'cancer.jpg',
        'date': '2022-07-01',
        'content': 'Scientists are predicting individual risks for 20 different types of cancer with a high degree of accuracy. The prediction model could help to identify people with a high risk of cancer, for whom individualized early detection programs could be tested in studies.',
    },
]

def init_db():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute(
        '''
        CREATE TABLE IF NOT EXISTS news (
            id TEXT PRIMARY KEY,
            slug TEXT UNIQUE,
            title TEXT,
            content TEXT,
            date TEXT,
            image TEXT
        )
        '''
    )
    cursor.execute('SELECT COUNT(*) FROM news')
    count = cursor.fetchone()[0]
    if count == 0:
        cursor.executemany(
            '''
            INSERT INTO news (id, slug, title, content, date, image) 
            VALUES (?, ?, ?, ?, ?, ?)
            ''',
            [(news['id'], news['slug'], news['title'], news['content'], news['date'], news['image']) for news in NEWS]
        )
    conn.commit()
    conn.close()

@app.route('/news', methods=['GET'])
def get_news():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM news')
    news = cursor.fetchall()
    conn.close()
    news_list = [
        {
            'id': row[0],
            'slug': row[1],
            'title': row[2],
            'content': row[3],
            'date': row[4],
            'image': row[5],
        } for row in news
    ]
    return jsonify(news_list)

if __name__ == '__main__':
    init_db()
    app.run(port=8080)